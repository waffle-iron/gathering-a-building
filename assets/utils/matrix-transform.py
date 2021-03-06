import json, os
import numpy as np

"""
This script calculates a transform matrix X such that 
one can project points in one 2d coordinate system
into another 2d coordinate system. Because the solution uses
a homogenous coordinate space to represent points, 
the projection may involve rotation, translation, shearing, 
and any number of other forces acting on the input matrix
space.

In this script the x and y values denote the bounding box
coordinates of an SVG (in which the top left corner is 0,0
and the bottom right corner is SVG width, SVG height):

x0, y0 denote the x,y coordinates of the top-left hand corner position
x1, y1 denote the x,y coordinates of the bottom-left hand corner position
x2, y2 denote the x,y coordinates of the top-right hand corner position
x3, y3 denote the x,y coordinates of the bottom-right hand corner position

Likewise, the u and v values denote the pixel coordinates
of the coordinate space into which the above-mentioned points
should be projected. In the example below, these coordinates describe a 
geographic region bound by lat, long coordinates. (The bounding
box coordinates of a geotiff may be extracted through GDAL with
the command `gdalinfo {{filename.geotiff}}`:

u0, v0 denote the x,y coordinates of the top-left hand corner position
u1, v1 denote the x,y coordinates of the bottom-left hand corner position
u2, v2 denote the x,y coordinates of the top-right hand corner position
u3, v3 denote the x,y coordinates of the bottom-right hand corner position

The script generates the transform matrix required to project points from 
the input coordinate space to the projection coordinate space. This 
transform matrix is a 3x3 matrix along the lines of the following:

[[-0.000003 -0.000130 41.329785]
 [0.000026 0.000048 -72.927220]
 [0.000001 -0.000001 1.000000]]
 
Given this transform matrix, we can project 2d points 
from the input coordinate space into the 2d output coordinate 
space by taking the x, y coordinates of the point of 
interest and building a 3x1 matrix using the point's x and 
y positions:

[[x],
 [y],
 [1]]
 
Taking the dot product of this 3x1 point matrix and the 3x3 
transform matrix gives us a projection of the point into
the output coordinate space. These resultant vectors look like this:

[[41.329785]
 [-72.927220]
 [1.000000]]

This vector may be interpreted as x0, x1, x2 where the projected 
x position is x0/x2 and the projected y position is x1/x2. 

"""

x0 = 0
x1 = 0
x2 = 3032
x3 = 3032

y0 = 0
y1 = 2341
y2 = 0
y3 = 2341

u0 = 41.3300605
u1 = 41.2938225
u2 = 41.3300605
u3 = 41.2938225

v0 = -72.9482779
v1 = -72.9482779
v2 = -72.9013434
v3 = -72.9013434

matrixa = np.array([  [x0, y0, 1, 0, 0, 0, -1 * u0 * x0, -1 * u0 * y0],
                      [0, 0, 0, x0, y0, 1, -1 * v0 * x0, -1 * v0 * y0],
                      [x1, y1, 1, 0, 0, 0, -1 * u1 * x1, -1 * u1 * y1],
                      [0, 0, 0, x1, y1, 1, -1 * v1 * x1, -1 * v1 * y1],
                      [x2, y2, 1, 0, 0, 0, -1 * u2 * x2, -1 * u2 * y2],
                      [0, 0, 0, x2, y2, 1, -1 * v2 * x2, -1 * v2 * y2],
                      [x3, y3, 1, 0, 0, 0, -1 * u3 * x3, -1 * u3 * y3],
                      [0, 0, 0, x3, y3, 1, -1 * v3 * x3, -1 * v3 * y3]  ])

matrixb = np.array([   u0, v0, u1, v1, u2, v2, u3, v3])

x = np.linalg.solve(matrixa, matrixb)

# use decimal notation for output
np.set_printoptions(formatter={'float_kind':'{:f}'.format})

# validate that the dot product of ax = b
print np.allclose(np.dot(matrixa, x), matrixb)

######################################################
# Project points from original space to target space #
######################################################

# to make the transform fully composed, add the missing 1
# value that should occupy the 8th matrix position 
# (using 0 based indexing) and then reshape the matrix
# to a 3x3 transform matrix
full_x_matrix = np.append(x, 1)

shaped_x_matrix = np.reshape(full_x_matrix, (3, 3))

print shaped_x_matrix, "\n\n"

# having composed the matrix, project the input points into the target space

# top left
point0 = np.array([[x0], [y0], [1]]) 

# bottom left
point1 = np.array([[x1], [y1], [1]])

# upper right
point2 = np.array([[x2], [y2], [1]])

# lower right
point3 = np.array([[x3], [y3], [1]])

for point in [point0, point1, point2, point3]:

  # multiply the point by the shaped matrix
  projected_point_array = np.dot(shaped_x_matrix, point)

  # Projected point array is a 3x1 array that is not
  # guaranteed to have a 1 in its final row. To project
  # the point into lat long space, we therefore need to
  # divide both the first and second rows by the
  # third row, which will give us the desired projection.
  pp0 = projected_point_array[0][0]
  pp1 = projected_point_array[1][0]
  pp2 = projected_point_array[2][0]

  projected_x_position = pp0 / pp2
  projected_y_position = pp1 / pp2

  print projected_x_position, projected_y_position


#############################################################
# Project SVG polygon points into the new coordinate system #
#############################################################

# SVG with Bezier paths was transformed into SVG with only polygon
# elements by using https://github.com/betravis/shape-tools/tree/master/path-to-polygon

path_to_polygon_svg = "../svg/duhaime_processed_2000.svg"

with open(path_to_polygon_svg, "r") as f:
  f = f.read()

  # create empty array in which to store projected polygon_elements
  projected_polygon_arrays = []

  polygon_segments = f.split('points=" ')[1:]

  # for each polygon segment, generate a new array of points
  for polygon_segment in polygon_segments:
    polygon_array = []

    clean_polygon_segment = polygon_segment.split(">")[0].replace('"','')
    point_list = clean_polygon_segment.split()
    for point in point_list:

      split_point = point.split(",")
      point_x = float(split_point[0])
      point_y = float(split_point[1])
      point_z = 1

      point_array = np.array([[point_x], [point_y], [point_z]])

      projected_point_array = np.dot(shaped_x_matrix, point_array)

      # TODO: Make projection a function, make SVG partition a function
      # Read in json with bounding boxes for two objects and use as 
      # coordinates
      pp0 = projected_point_array[0][0]
      pp1 = projected_point_array[1][0]
      pp2 = projected_point_array[2][0]

      projected_x_position = pp0 / pp2
      projected_y_position = pp1 / pp2

      polygon_array.append([projected_x_position, projected_y_position])

    # after iterating through all points for this polygon, add the projected
    # point array to the larger list
    projected_polygon_arrays.append(polygon_array)

# write the sum total list of polygon arrays to disk
with open("../../json/projected_buildings.json", "w") as json_out:
  json.dump(projected_polygon_arrays, json_out)

# upload the produced file to S3
os.popen("aws s3 cp ../../json/projected_buildings.json s3://gathering-a-building --acl public-read")
