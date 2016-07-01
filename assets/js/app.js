var buildingApp = angular.module("BuildingApp", ["ngRoute", "ngSanitize"]);


/***
* Routing configuation for the application
***/

buildingApp.config(["$routeProvider", function($routeProvider) {
      
  // route for the home view
  $routeProvider.when('/', {
    templateUrl : '/templates/home.html',
    controller  : 'homeController'
  })

  // route for the site history view
  $routeProvider.when('/routes/site-history', {
    templateUrl : '/templates/site-history.html',
    controller  : 'siteHistoryController'
  })

  // route for the architecture and urbanism view
  $routeProvider.when('/routes/architecture-and-urbanism', {
    templateUrl : '/templates/architecture-and-urbanism.html',
    controller  : 'architectureAndUrbanismController'
  })

  // route for the material journeys view
  $routeProvider.when('/routes/material-journeys', {
    templateUrl : '/templates/material-journeys.html',
    controller  : 'materialJourneysController'
  })

  // route for the about page
  $routeProvider.when('/routes/people-and-place', {
    templateUrl : '/templates/people-and-place.html',
    controller  : 'peopleAndPlaceController'
  })

  // route for all other requests
  $routeProvider.otherwise({
    redirectTo: "/"
  });

}]);



/***
* Directive to dynamically set background images
***/

buildingApp.directive('backgroundImage', function(){
  return function(scope, element, attrs){
    var url = attrs.backgroundImage;
    element.css({
      'background': 'url(' + url + ') no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-mox-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    });
  };
});



// Navigation Controller to populate navigation overlay
buildingApp.controller("navigationController", [
      "$scope", "$http",
  function($scope, $http) {

    /***
    * @params: none
    * @returns: none
    *
    * Hide or show the navigation overlay
    ***/

    $scope.toggleNavigation = function() {
      $(".navigation").toggleClass("hidden");
      $(".navigation-overlay").toggleClass("hidden");
    };

  }
]);



/********************************
* Controllers for view partials *
********************************/

// Brand Controller to populate brand
buildingApp.controller("brandController", [
      "$scope", "$http",
  function($scope, $http) {

    /***
    * @object: keys are aspects of brand identity
    *          values are details for the current brand
    *
    * Establishes brand information to show in the view
    ***/

    $scope.brand = {
      "title": "GATHERING A BUILDING",
      "logo": "/assets/images/dh-lab-gray.png",
      "url": "http://web.library.yale.edu/dhlab"
    };

  }
]);



/************************
* Controllers for views *
************************/

// Controller for home view
buildingApp.controller("homeController", [
      "$scope", "$http",
  function($scope, $http) {

    var footer = {
      "left": {
        "display": "Home",
        "url": "/#/"
      },
      "right": {
        "display": "Next <i class='fa fa-angle-down'></i>",
        "url": "/#/"
      },
      "style": "full"
    };

    $scope.footer = footer;
    $scope.textColumn = {};

  }
]);



// Controller for site history view
buildingApp.controller("siteHistoryController", [
      "$scope", "$http",
  function($scope, $http) {

    var textColumn = {
      "sections": {
        "1": {
          "id": "1",
          "title": "SH Section 1 Title",
          "subtitle": "SH Section 1 subtitle is longer than the title",
          "paragraphs": ["Lorem ipsum dolor sit amet, ne soleat dolorem lobortis nam, no meis civibus aliquando vis. Ut vidit sonet usu, an mel quot paulo mentitum. Eu sea tollit erroribus, vix eu reque fugit labore, an vel repudiare persecuti. Equidem omnesque ut qui, est persius ocurreret et, postulant voluptaria eam ut. Probo fierent ponderum sea ex. In mea eius utamur petentium, suscipit deserunt accommodare duo ut, ne verear omittam vel.", "Mea odio mutat lobortis no, te perpetua facilisis principes ius. Nisl fastidii periculis cu est, ex errem euripidis evertitur nec. Eu debet placerat mediocrem vis, pro vidisse accumsan gloriatur ei. Cu omittam scripserit nec. Nec erroribus reprimique te, modus fabulas ea pro, adhuc omnes offendit no pro.", "Sea ne amet voluptaria intellegam, an eos elitr moderatius complectitur. Ad epicurei oportere imperdiet eam, stet omnes nonumy per at, at fierent appellantur pri. Te modo omnes assentior qui. Elitr labitur accommodare cu mel. Ad wisi dolore nec. Adhuc nullam mel ei, duo augue imperdiet no.", "Vel etiam signiferumque ex, inermis splendide mei ea. Eu pro latine eruditi persecuti, veri iusto temporibus ei his. Pro novum soleat salutandi te, eos agam tation nominavi eu. Iisque oblique quo ea.", "Et minim constituto cum, id pri semper denique scaevola. An mea eruditi indoctum, quo dico quot nominavi in. Ut sea aperiri facilis assueverit, quodsi latine facilis ea qui. Nihil probatus vis at, ut sed atqui legere, usu propriae necessitatibus ea.", "His an detraxit consulatu, no brute pertinacia sit, an eam vivendo aliquando. Sed accusamus elaboraret ut, ei his congue percipitur. Putent epicuri argumentum in mea, eam cu option splendide, mel solum inimicus ad. Ne facilisi gloriatur vel, facer veniam vivendo ius at. In diam aeque iracundia usu, ex nec amet diceret signiferumque. Cu vix erant oblique nostrum, ei est feugiat forensibus, ea sed meis omittantur. Vel tation similique no.", "Habemus civibus eu has, usu ne debet option mentitum, pro ut tota delenit fuisset. Ut sit iriure sapientem, placerat senserit efficiantur id qui, sit malorum iudicabit et. Cu eripuit lucilius mei, eam hinc esse adhuc et, solet diceret mel ex. Duo ei dicam malorum abhorreant, error ignota scripta ea sit. Est cu justo albucius forensibus, ipsum omnium cu qui. Et est enim gloriatur, has alii solum ut.", "Eos laoreet posidonium an, doctus appareat no quo, est quot albucius in. Primis reprehendunt cum ei. Interesset cotidieque interpretaris nam ex, quo soluta putent aliquam cu. Ea pri ornatus detracto. Regione voluptaria at sed, nam adhuc nostrum at.", "Pri modus facete legendos eu, no eum amet aliquam appellantur, vivendo honestatis vix ei. Cum sonet discere neglegentur at, an pro iuvaret vivendo, eos in suscipit percipitur. Sit lucilius persequeris id. Vim et accumsan theophrastus, elitr vulputate eos cu.", "Epicurei mediocrem consequat cu pri. Vocibus repudiare pro ea, vis melius utroque rationibus ne, vim esse feugiat appetere id. Ad elit errem habemus ius, suas ferri adversarium mei te. Tollit menandri percipitur mel at."],
          "background": {
            "1": {
              "url": "/assets/images/scaffold.jpg",
              "alt": "Image of scaffolding",
              "annotation": "Scholarly annotation of scaffold image"
            }
          }
        },

        "2": {
          "id": "2",
          "title": "SH Section 2 Title",
          "subtitle": "SH Section 2 subtitle is longer than the title",
          "paragraphs": ["Lorem ipsum dolor sit amet, ne soleat dolorem lobortis nam, no meis civibus aliquando vis. Ut vidit sonet usu, an mel quot paulo mentitum. Eu sea tollit erroribus, vix eu reque fugit labore, an vel repudiare persecuti. Equidem omnesque ut qui, est persius ocurreret et, postulant voluptaria eam ut. Probo fierent ponderum sea ex. In mea eius utamur petentium, suscipit deserunt accommodare duo ut, ne verear omittam vel.", "Mea odio mutat lobortis no, te perpetua facilisis principes ius. Nisl fastidii periculis cu est, ex errem euripidis evertitur nec. Eu debet placerat mediocrem vis, pro vidisse accumsan gloriatur ei. Cu omittam scripserit nec. Nec erroribus reprimique te, modus fabulas ea pro, adhuc omnes offendit no pro.", "Sea ne amet voluptaria intellegam, an eos elitr moderatius complectitur. Ad epicurei oportere imperdiet eam, stet omnes nonumy per at, at fierent appellantur pri. Te modo omnes assentior qui. Elitr labitur accommodare cu mel. Ad wisi dolore nec. Adhuc nullam mel ei, duo augue imperdiet no.", "Vel etiam signiferumque ex, inermis splendide mei ea. Eu pro latine eruditi persecuti, veri iusto temporibus ei his. Pro novum soleat salutandi te, eos agam tation nominavi eu. Iisque oblique quo ea.", "Et minim constituto cum, id pri semper denique scaevola. An mea eruditi indoctum, quo dico quot nominavi in. Ut sea aperiri facilis assueverit, quodsi latine facilis ea qui. Nihil probatus vis at, ut sed atqui legere, usu propriae necessitatibus ea.", "His an detraxit consulatu, no brute pertinacia sit, an eam vivendo aliquando. Sed accusamus elaboraret ut, ei his congue percipitur. Putent epicuri argumentum in mea, eam cu option splendide, mel solum inimicus ad. Ne facilisi gloriatur vel, facer veniam vivendo ius at. In diam aeque iracundia usu, ex nec amet diceret signiferumque. Cu vix erant oblique nostrum, ei est feugiat forensibus, ea sed meis omittantur. Vel tation similique no.", "Habemus civibus eu has, usu ne debet option mentitum, pro ut tota delenit fuisset. Ut sit iriure sapientem, placerat senserit efficiantur id qui, sit malorum iudicabit et. Cu eripuit lucilius mei, eam hinc esse adhuc et, solet diceret mel ex. Duo ei dicam malorum abhorreant, error ignota scripta ea sit. Est cu justo albucius forensibus, ipsum omnium cu qui. Et est enim gloriatur, has alii solum ut.", "Eos laoreet posidonium an, doctus appareat no quo, est quot albucius in. Primis reprehendunt cum ei. Interesset cotidieque interpretaris nam ex, quo soluta putent aliquam cu. Ea pri ornatus detracto. Regione voluptaria at sed, nam adhuc nostrum at.", "Pri modus facete legendos eu, no eum amet aliquam appellantur, vivendo honestatis vix ei. Cum sonet discere neglegentur at, an pro iuvaret vivendo, eos in suscipit percipitur. Sit lucilius persequeris id. Vim et accumsan theophrastus, elitr vulputate eos cu.", "Epicurei mediocrem consequat cu pri. Vocibus repudiare pro ea, vis melius utroque rationibus ne, vim esse feugiat appetere id. Ad elit errem habemus ius, suas ferri adversarium mei te. Tollit menandri percipitur mel at."],
          "background": {
            "1": {
              "url": "/assets/images/skyline.jpg",
              "alt": "Image of skyline",
              "annotation": "Scholarly annotation of skyline image"
            }
          }
        }
      },

      "display": "1",
      "hr": "1"

    };

    $scope.textColumn = textColumn;

    var showTextColumn = function() {
      $scope.textColumn.display = "1";
      $scope.footer.right.display = "<i class='fa fa-chevron-circle-up'></i>";
    };

    var hideTextColumn = function() {
      $scope.textColumn.display = "0";
      $scope.footer.right.display = "<i class='fa fa-chevron-circle-down'></i>";
    };

    $scope.toggleTextColumn = function() {
      $scope.textColumn.display === "1"? hideTextColumn() : showTextColumn();
    }

    /***
    * @object: keys are ids for the selected plan
    *          values are labels for the selected plan
    *
    * Defines the available map overlays
    ***/

    var mapOverlayLabels = {
      "1": "Doolittle Plan",
      "2": "Snider Plan",
      "3": "Pauley Plan"
    }

    /***
    * @params: Integer that is present in Object.keys(mapOverlayLabels)
    * @returns: none
    *  
    * Updates the map to display the selected map overlay
    ***/

    $scope.selectOverlay = function(selectedId) {
      $(".map-overlay").removeClass("active");
      $(".map-overlay-" + selectedId).addClass("active");
      
      var footer = {
        "left": {
          "display": mapOverlayLabels[selectedId],
          "url": "/#/"
        },
        "right": {
          "display": "<i class='fa fa-chevron-circle-up'></i>",
          "url": "/#/",
          "onClick": "toggleTextColumn()"
        },
         "style": "full"
       };

       $scope.footer = footer;
    };

    /***
    * @params: none
    * @returns: none
    *  
    * Sets the first map overlay option as the currently displayed overlay
    ***/

    $scope.selectOverlay(1);

    /***
    * @params: none
    * @returns: none
    *  
    * Function that builds the basemap on which layers will be added
    ***/

    var initializeMap = function() {

      // specify the coordinates on which to center the map initially
      centerCoordinates = new L.LatLng(41.307, -72.928);

      // create the map object itself
      var map = new L.Map("map", {
        center: centerCoordinates,
        zoom: 17,
        zoomControl: false
      });

      // position the zoom controls in the bottom right hand corner
      L.control.zoom({
        position: 'bottomright',
        zoom: 17,
        maxZoom: 20,
        minZoom: 12,
      }).addTo(map);

      // use the cartodb basemap
      map.addLayer(new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }));

      // specify the coordinates of the overlay's bounding box
      var upperLeft = L.latLng(41.329785, -72.927220);
      var lowerLeft = L.latLng(41.304414, -72.945686);
      var upperRight = L.latLng(41.319186, -72.903268);
      var lowerRight = L.latLng(41.293816, -72.921718);

      /*
      upperLeftPixel = map.latLngToLayerPoint(upperLeft);
      lowerRightPixel = map.latLngToLayerPoint(lowerRight);

      console.log(upperLeftPixel, lowerRightPixel);

      var upperLeftContainer = map.layerPointToContainerPoint(upperLeftPixel);
      var lowerRightContainer = map.layerPointToContainerPoint(lowerRightPixel);

      console.log(upperLeftContainer, lowerRightContainer);
      */

      // create a red polyline from an array of LatLng points
      var polyline = L.polyline([upperLeft, upperRight, lowerRight, lowerLeft, upperLeft], {color: 'red', className: 'bounding-box'}).addTo(map);

      // to zoom to the polyline we just drew
      //map.fitBounds(polyline.getBounds());


      d3.xml("./assets/svg/2000_Cooper_Robertson_G_cutout1.svg",
        function(svgImage) {
          var overlayTarget = document.getElementsByClassName("leaflet-overlay-pane")[0];
          overlayTarget.appendChild(svgImage.documentElement);
        }
      );


    };

    /***
    * @params: none
    * @returns: none
    *  
    * Initializes map overlay
    ***/

    initializeMap();

  }
]);



// Controller for site architecture and urbanism view
buildingApp.controller("architectureAndUrbanismController", [
    "$scope", "$http",
  function($scope, $http) {


    var footer = {
      "left": {
        "display": "Architecture and Urbanism",
        "url": "/#/routes/material-journeys"
      },
      "right": {
        "display": "Next <i class='fa fa-angle-down'></i>",
        "url": ""
      },
       "style": "partial"
     };

    $scope.footer = footer;

    var textColumn = {

      "sections": {
        "1": {
          "id": "1",
          "title": "AU Section 1 Title",
          "subtitle": "AU Section 1 subtitle is longer than the title",
          "paragraphs": ["Lorem ipsum dolor sit amet, vix vide audire at, autem mentitum sententiae id eum. Adversarium signiferumque est eu, an eum sonet essent mediocritatem. Ea impedit gubergren torquatos quo, te inermis noluisse consequat his. Probo explicari te ius. Id vix expetenda conceptam democritum, et vocent propriae pro. Cu scaevola instructior duo, his dicunt phaedrum ad, at dicat veritus constituam sea. Nobis possit scaevola sit ex, stet eloquentiam ne pri.", "Debitis mediocritatem cu pro, te pro recusabo abhorreant. Hinc perpetua per ad, mea ei munere causae commune. Vide placerat democritum ne pri, modus docendi te pro, illud dicant eos no. Quod platonem ad pri, pri ne virtute invidunt deterruisset. Ut iusto forensibus reprehendunt vis.", "Graece theophrastus ut vel, vim gloriatur intellegam cotidieque ne. Quo delenit perfecto et, dicat labores ne qui, pro id dicam aperiam disputando. Mucius intellegam te nam. Eum et augue tantas, ad tale delenit mea. An natum platonem elaboraret eam, quando forensibus pro ex. Id eam mutat mediocrem maiestatis. Mea mazim quando indoctum ea, liber integre principes quo at, pri ad accusamus consectetuer.", "Eos ex epicurei persequeris appellantur, ea alii velit augue cum. An dolor sententiae vis, ne modo aperiam imperdiet cum. Ex cum amet adversarium interpretaris, nisl utinam ea has. Minim vidisse eam no, ut eos dolor ridens, eum te moderatius efficiantur ullamcorper.", "Ne mea tempor theophrastus, eam in mandamus euripidis intellegebat. Usu laoreet lobortis efficiantur no, agam nemore evertitur eu vel, ex duo tincidunt democritum. Munere labore ei pro, impetus sensibus in vis. Vel ut habeo voluptaria, per eu quem erat facete, cu eam dolor eligendi perpetua. Dolor assentior maiestatis ne eam.", "No per rebum impetus sadipscing, tollit euismod an eum. Usu oportere partiendo no, in sed brute fastidii philosophia. Ut pri bonorum probatus. Te nostro repudiandae nam, ex eum porro atqui.", "At eos omnes decore quidam. Dolore mollis eripuit eum ex, minim mediocritatem vim te. Eruditi pertinax te cum, ancillae maluisset cum ei. Ut mei maiorum dissentias, veri virtute habemus cu has. Sed eu scribentur instructior, eos ei agam latine complectitur.", "Wisi debet clita vim ea. Magna habeo mucius vix no, ad pri recusabo expetendis. Ei est etiam aliquid. Mea brute mnesarchum et, ne dolores appareat interpretaris vel.", "Legere omittam appetere in mel. An eum quaeque referrentur. At vim quod modus scripta. Pro ne facer eruditi, partem efficiendi te sed, et praesent interesset ius. Porro dolores et vel, dico antiopam id duo.", "Nam saepe adolescens reprehendunt ea, homero timeam nostrum eos et. Cu eum reque evertitur, ius eu nonumy delectus voluptatibus. Mei no diceret percipit voluptatum, aeque omnes id has. Ad possit democritum eum, copiosae perfecto tacimates has no, natum mundi congue te mea. Ut doming utamur eos."],
          "background": {
            "1": {
              "url": "/assets/images/scaffold.jpg",
              "alt": "Image of scaffolding",
              "annotation": "Scholarly annotation of scaffold image"
            }
          }
        },

        "2": {
          "id": "2",
          "title": "AU Section 2 Title",
          "subtitle": "AU Section 2 subtitle is longer than the title",
          "paragraphs": ["Lorem ipsum dolor sit amet, vix vide audire at, autem mentitum sententiae id eum. Adversarium signiferumque est eu, an eum sonet essent mediocritatem. Ea impedit gubergren torquatos quo, te inermis noluisse consequat his. Probo explicari te ius. Id vix expetenda conceptam democritum, et vocent propriae pro. Cu scaevola instructior duo, his dicunt phaedrum ad, at dicat veritus constituam sea. Nobis possit scaevola sit ex, stet eloquentiam ne pri.", "Debitis mediocritatem cu pro, te pro recusabo abhorreant. Hinc perpetua per ad, mea ei munere causae commune. Vide placerat democritum ne pri, modus docendi te pro, illud dicant eos no. Quod platonem ad pri, pri ne virtute invidunt deterruisset. Ut iusto forensibus reprehendunt vis.", "Graece theophrastus ut vel, vim gloriatur intellegam cotidieque ne. Quo delenit perfecto et, dicat labores ne qui, pro id dicam aperiam disputando. Mucius intellegam te nam. Eum et augue tantas, ad tale delenit mea. An natum platonem elaboraret eam, quando forensibus pro ex. Id eam mutat mediocrem maiestatis. Mea mazim quando indoctum ea, liber integre principes quo at, pri ad accusamus consectetuer.", "Eos ex epicurei persequeris appellantur, ea alii velit augue cum. An dolor sententiae vis, ne modo aperiam imperdiet cum. Ex cum amet adversarium interpretaris, nisl utinam ea has. Minim vidisse eam no, ut eos dolor ridens, eum te moderatius efficiantur ullamcorper.", "Ne mea tempor theophrastus, eam in mandamus euripidis intellegebat. Usu laoreet lobortis efficiantur no, agam nemore evertitur eu vel, ex duo tincidunt democritum. Munere labore ei pro, impetus sensibus in vis. Vel ut habeo voluptaria, per eu quem erat facete, cu eam dolor eligendi perpetua. Dolor assentior maiestatis ne eam.", "No per rebum impetus sadipscing, tollit euismod an eum. Usu oportere partiendo no, in sed brute fastidii philosophia. Ut pri bonorum probatus. Te nostro repudiandae nam, ex eum porro atqui.", "At eos omnes decore quidam. Dolore mollis eripuit eum ex, minim mediocritatem vim te. Eruditi pertinax te cum, ancillae maluisset cum ei. Ut mei maiorum dissentias, veri virtute habemus cu has. Sed eu scribentur instructior, eos ei agam latine complectitur.", "Wisi debet clita vim ea. Magna habeo mucius vix no, ad pri recusabo expetendis. Ei est etiam aliquid. Mea brute mnesarchum et, ne dolores appareat interpretaris vel.", "Legere omittam appetere in mel. An eum quaeque referrentur. At vim quod modus scripta. Pro ne facer eruditi, partem efficiendi te sed, et praesent interesset ius. Porro dolores et vel, dico antiopam id duo.", "Nam saepe adolescens reprehendunt ea, homero timeam nostrum eos et. Cu eum reque evertitur, ius eu nonumy delectus voluptatibus. Mei no diceret percipit voluptatum, aeque omnes id has. Ad possit democritum eum, copiosae perfecto tacimates has no, natum mundi congue te mea. Ut doming utamur eos."],
          "background": {
            "1": {
              "url": "/assets/images/skyline.jpg",
              "alt": "Image of skyline",
              "annotation": "Scholarly annotation of skyline image"
            }
          }
        }
      },

      "display": "1",
      "hr": "1"

    };

    $scope.textColumn = textColumn;

  }
]);



// Controller for material journeys view
buildingApp.controller("materialJourneysController", [
      "$scope", "$http",
  function($scope, $http) {

    /***
    * @params: footer Object sent to footerService to update footerController
    * @returns: none
    *
    * Updates the content in the footer
    ***/

    var footer = {
      "left": {
        "display": "Material Journeys",
        "url": "/#/routes/material-journeys"
      },
      "right": {
        "display": "Next <i class='fa fa-angle-down'></i>",
        "url": ""
      },
       "style": "partial"
     };

    $scope.footer = footer;

    /***
    * @params: textColumn Object used to update the textColumn factory
    * @returns: none
    *
    * Updates the textColumn controller, which populates the text column
    ***/

    var textColumn = {

      "sections": {
        "1": {
          "id": "1",
          "title": "MJ Section 1 Title",
          "subtitle": "MJ Section 1 subtitle is longer than the title",
          "paragraphs": ["Lorem ipsum dolor sit amet, at mel purto delectus legendos, tantas labitur civibus id mel, inani timeam atomorum no eam. Tollit habemus commune mel cu. Has at labores ullamcorper, te eam ullum populo nonumes. Hinc tation nonumy qui id, vis congue molestie ut, in dolorum recusabo sea.", "Et est contentiones mediocritatem, paulo equidem similique eos ad. Forensibus persequeris interpretaris ut mea, duo vitae meliore conceptam at. Vix cu dicam legimus, pri facete fabellas ut, an vis libris aperiri partiendo. Duo conceptam argumentum in, ut eam nisl discere eripuit, errem cetero quaerendum at sed. Mea ex quis hinc persius, esse dignissim sea cu, ut eruditi contentiones has.", "Ad tacimates laboramus nec, cum ex mollis dolores. Sale aperiri pertinax quo eu. Mutat aeterno perpetua vel cu, sed accumsan verterem consequuntur ea, an nobis scribentur has. Eu iudicabit voluptatum vix. Eam eu invenire consetetur suscipiantur, summo mundi voluptaria nec eu, an omnis eirmod tincidunt quo. Vide meis an pri. Est ei meis posidonium argumentum.", "Pro te inani homero, ei delenit iudicabit ius. Minim nostro eruditi eam at, nec everti discere ponderum an. Qui illum ipsum ne. Quidam dolorem dolores ex per, ex nec integre patrioque intellegat. An nam munere impetus.", "Periculis hendrerit sententiae id has. Vel eu natum ferri evertitur, vim at augue facilisi. Pri erant civibus id, inermis definitiones cu vis. Tritani verterem cotidieque eos ea. Pri at probatus partiendo efficiendi, minim liber accusamus at vix. Vix ceteros percipit antiopam et, option concludaturque ex per, no eum modo audiam adversarium.", "Modo novum fastidii an quo. Mea ad nisl feugiat voluptaria, per tantas expetenda ad. Cum quem meis integre ne. Ius an duis appetere, tempor atomorum voluptaria sit te. Ea omnes semper explicari duo, eu velit detracto est. In aeque assentior reprimique duo.", "Congue munere his ad, an has detracto deterruisset. An eam dolor laoreet, affert nullam pri in. Vis et saepe feugiat, vim ut labore iracundia. Ut sumo vitae nec, pro ei soluta labores. Vis delenit petentium no, suscipit petentium deterruisset per no.", "Novum mucius te mea, ne natum detraxit sea. Cibo euismod incorrupte et sed, ad mel omittantur interpretaris. Ad erant nihil placerat ius. Has eu mutat persius tractatos, cu nec putant vulputate, fugit theophrastus nam ea. Cibo habemus gloriatur qui et, usu mollis fierent placerat ne, eum senserit abhorreant ut.", "Mei cu eripuit alienum euripidis. Propriae constituto complectitur ad mea, partem propriae scaevola eu nec. Sit cu verear sanctus pericula. Ut usu sint salutandi, posse noster at vis. Errem appetere ex vis, at sed scaevola accusamus inciderint.", "Pri te tota insolens mediocrem, has in illud porro facilisis. An duo laudem ocurreret, has duis detraxit argumentum eu. Ius id quis postea suscipit, est falli scripserit interpretaris ea, in sit deseruisse disputationi. At ridens apeirian sed, eam unum dicunt reformidans te. Illum minimum sit ea, per omnis laudem ea. Per eleifend corrumpit id, liber adversarium ius at, ei pro putant corpora forensibus."],
          "background": {
            "1": {
              "url": "/assets/images/scaffold.jpg",
              "alt": "Image of scaffolding",
              "annotation": "Scholarly annotation of scaffold image"
            }
          }
        },

        "2": {
          "id": "2",
          "title": "MJ Section 2 Title",
          "subtitle": "MJ Section 2 subtitle is longer than the title",
          "paragraphs": ["Lorem ipsum dolor sit amet, at mel purto delectus legendos, tantas labitur civibus id mel, inani timeam atomorum no eam. Tollit habemus commune mel cu. Has at labores ullamcorper, te eam ullum populo nonumes. Hinc tation nonumy qui id, vis congue molestie ut, in dolorum recusabo sea.", "Et est contentiones mediocritatem, paulo equidem similique eos ad. Forensibus persequeris interpretaris ut mea, duo vitae meliore conceptam at. Vix cu dicam legimus, pri facete fabellas ut, an vis libris aperiri partiendo. Duo conceptam argumentum in, ut eam nisl discere eripuit, errem cetero quaerendum at sed. Mea ex quis hinc persius, esse dignissim sea cu, ut eruditi contentiones has.", "Ad tacimates laboramus nec, cum ex mollis dolores. Sale aperiri pertinax quo eu. Mutat aeterno perpetua vel cu, sed accumsan verterem consequuntur ea, an nobis scribentur has. Eu iudicabit voluptatum vix. Eam eu invenire consetetur suscipiantur, summo mundi voluptaria nec eu, an omnis eirmod tincidunt quo. Vide meis an pri. Est ei meis posidonium argumentum.", "Pro te inani homero, ei delenit iudicabit ius. Minim nostro eruditi eam at, nec everti discere ponderum an. Qui illum ipsum ne. Quidam dolorem dolores ex per, ex nec integre patrioque intellegat. An nam munere impetus.", "Periculis hendrerit sententiae id has. Vel eu natum ferri evertitur, vim at augue facilisi. Pri erant civibus id, inermis definitiones cu vis. Tritani verterem cotidieque eos ea. Pri at probatus partiendo efficiendi, minim liber accusamus at vix. Vix ceteros percipit antiopam et, option concludaturque ex per, no eum modo audiam adversarium.", "Modo novum fastidii an quo. Mea ad nisl feugiat voluptaria, per tantas expetenda ad. Cum quem meis integre ne. Ius an duis appetere, tempor atomorum voluptaria sit te. Ea omnes semper explicari duo, eu velit detracto est. In aeque assentior reprimique duo.", "Congue munere his ad, an has detracto deterruisset. An eam dolor laoreet, affert nullam pri in. Vis et saepe feugiat, vim ut labore iracundia. Ut sumo vitae nec, pro ei soluta labores. Vis delenit petentium no, suscipit petentium deterruisset per no.", "Novum mucius te mea, ne natum detraxit sea. Cibo euismod incorrupte et sed, ad mel omittantur interpretaris. Ad erant nihil placerat ius. Has eu mutat persius tractatos, cu nec putant vulputate, fugit theophrastus nam ea. Cibo habemus gloriatur qui et, usu mollis fierent placerat ne, eum senserit abhorreant ut.", "Mei cu eripuit alienum euripidis. Propriae constituto complectitur ad mea, partem propriae scaevola eu nec. Sit cu verear sanctus pericula. Ut usu sint salutandi, posse noster at vis. Errem appetere ex vis, at sed scaevola accusamus inciderint.", "Pri te tota insolens mediocrem, has in illud porro facilisis. An duo laudem ocurreret, has duis detraxit argumentum eu. Ius id quis postea suscipit, est falli scripserit interpretaris ea, in sit deseruisse disputationi. At ridens apeirian sed, eam unum dicunt reformidans te. Illum minimum sit ea, per omnis laudem ea. Per eleifend corrumpit id, liber adversarium ius at, ei pro putant corpora forensibus."],
          "background": {
            "1": {
              "url": "/assets/images/skyline.jpg",
              "alt": "Image of skyline",
              "annotation": "Scholarly annotation of skyline image"
            }
          }
        }
      },

      "display": "1",
      "hr": "1"

    };

    $scope.textColumn = textColumn;
    $scope.backgroundImageUrl = "/assets/images/scaffold.jpg";

  }
]);



// Controller for people and place view
buildingApp.controller("peopleAndPlaceController", [
      "$scope", "$http",
  function($scope, $http) {

    var footer = {
      "left": {
        "display": "People and Place",
        "url": "/#/routes/people-and-place"
      },
      "right": {
        "display": "Next <i class='fa fa-angle-down'></i>",
        "url": ""
      },
       "style": "partial"
     };

    $scope.footer = footer;

    var textColumn = {

      "sections": {
        "1": {
          "id": "1",
          "title": "PP Section 1 Title",
          "subtitle": "PP Section 1 subtitle is longer than the title",
          "paragraphs": ["Lorem ipsum dolor sit amet, sed at hinc mediocritatem, et quaeque feugait rationibus vim. Sea eu posse iudico expetendis, mutat luptatum no pri. Nam ex illud comprehensam, cu usu putent quodsi. Sea offendit consequat definitiones ea. Ei mea mollis detracto dissentiet. Idque periculis rationibus vix ne, purto scripta ex mea, corpora fabellas mei in. Vis dicta dolorum repudiandae ad.", "Oratio munere assueverit ea nam. Ne iusto moderatius quo, commune principes honestatis pri id. Qui accusata posidonium vituperatoribus ut, solet nostro philosophia ad mel, sea alia vero vitae in. Eos enim deseruisse ex, esse summo aliquam ad mea.", "Incorrupte contentiones conclusionemque duo ei, sit ut aperiam minimum. Cu sed malorum legimus aliquando. Mel te nihil aperiam mediocritatem, putent liberavisse quo at. Cum an mollis labores corpora, vis ad libris noster laboramus, sed atqui graecis necessitatibus in. Ne agam dolorem commune quo, per euismod quaerendum no, volumus commune mediocritatem eum ea. Mazim iusto in sea.", "Accumsan apeirian sea cu. Sonet discere admodum ne eum, percipit consequat suscipiantur ne est. Nulla iisque eos at. Usu veri civibus fierent ei, id ullum appareat dissentias nec, has ad posse blandit. Odio graecis intellegat ei duo, ius te harum maiestatis, vis doctus consetetur ne. Ad ius suscipit rationibus elaboraret.", "Et veri prima numquam sed, eam te denique imperdiet necessitatibus, nibh melius civibus at quo. In alia mazim harum eam, eu nec reformidans instructior. Eum aeque inimicus eu. Evertitur scribentur ei vix. Epicuri accommodare vis ne.", "Omnis lobortis atomorum vix id, ludus vocent cu mel. No insolens partiendo salutandi vel. Electram dissentiet per et, docendi oportere pericula an ius. At per iriure virtute aliquam. Omnes putent ius et.", "Ex persius assueverit has, ex vivendo delectus vel. Sit at libris postea apeirian. Probo feugiat cum ea, brute iriure maluisset vis no. Nemore fierent suavitate ea pri, clita commune ad sit. Ei est stet munere, ei qui modo quaerendum.", "Sit ad nobis alterum utroque. Adhuc ignota dolores eum at. Veri possim molestiae te duo, partem regione iracundia eos in, ad usu summo ancillae dissentiet. Iudico aliquando id vix, aeque quando persecuti ius te, nam sumo cetero euismod id. Ex graeco antiopam consulatu mea, etiam moderatius id sit.", "Suas summo quo ex. In vim natum novum mollis. Est ei fuisset evertitur. Modus debet quo an, quo ut stet debet consectetuer, dicant salutandi ius an. Ad fugit viderer vim, cum ne eirmod rationibus. Ius purto inciderint cu. An stet regione numquam eam, facer verear invidunt duo ea, qui accumsan gubergren id.", "Mel ex homero legendos delicatissimi, no inani tollit pericula vix, nec ea invidunt deseruisse reprehendunt. Id case accusamus theophrastus est, per id malorum ullamcorper. Veritus convenire est et. At mei noluisse consequat, fastidii deterruisset an mea."],
          "background": {
            "1": {
              "url": "/assets/images/scaffold.jpg",
              "alt": "Image of scaffolding",
              "annotation": "Scholarly annotation of scaffold image"
            }
          }
        },

        "2": {
          "id": "2",
          "title": "PP Section 2 Title",
          "subtitle": "PP Section 2 subtitle is longer than the title",
          "paragraphs": ["Lorem ipsum dolor sit amet, sed at hinc mediocritatem, et quaeque feugait rationibus vim. Sea eu posse iudico expetendis, mutat luptatum no pri. Nam ex illud comprehensam, cu usu putent quodsi. Sea offendit consequat definitiones ea. Ei mea mollis detracto dissentiet. Idque periculis rationibus vix ne, purto scripta ex mea, corpora fabellas mei in. Vis dicta dolorum repudiandae ad.", "Oratio munere assueverit ea nam. Ne iusto moderatius quo, commune principes honestatis pri id. Qui accusata posidonium vituperatoribus ut, solet nostro philosophia ad mel, sea alia vero vitae in. Eos enim deseruisse ex, esse summo aliquam ad mea.", "Incorrupte contentiones conclusionemque duo ei, sit ut aperiam minimum. Cu sed malorum legimus aliquando. Mel te nihil aperiam mediocritatem, putent liberavisse quo at. Cum an mollis labores corpora, vis ad libris noster laboramus, sed atqui graecis necessitatibus in. Ne agam dolorem commune quo, per euismod quaerendum no, volumus commune mediocritatem eum ea. Mazim iusto in sea.", "Accumsan apeirian sea cu. Sonet discere admodum ne eum, percipit consequat suscipiantur ne est. Nulla iisque eos at. Usu veri civibus fierent ei, id ullum appareat dissentias nec, has ad posse blandit. Odio graecis intellegat ei duo, ius te harum maiestatis, vis doctus consetetur ne. Ad ius suscipit rationibus elaboraret.", "Et veri prima numquam sed, eam te denique imperdiet necessitatibus, nibh melius civibus at quo. In alia mazim harum eam, eu nec reformidans instructior. Eum aeque inimicus eu. Evertitur scribentur ei vix. Epicuri accommodare vis ne.", "Omnis lobortis atomorum vix id, ludus vocent cu mel. No insolens partiendo salutandi vel. Electram dissentiet per et, docendi oportere pericula an ius. At per iriure virtute aliquam. Omnes putent ius et.", "Ex persius assueverit has, ex vivendo delectus vel. Sit at libris postea apeirian. Probo feugiat cum ea, brute iriure maluisset vis no. Nemore fierent suavitate ea pri, clita commune ad sit. Ei est stet munere, ei qui modo quaerendum.", "Sit ad nobis alterum utroque. Adhuc ignota dolores eum at. Veri possim molestiae te duo, partem regione iracundia eos in, ad usu summo ancillae dissentiet. Iudico aliquando id vix, aeque quando persecuti ius te, nam sumo cetero euismod id. Ex graeco antiopam consulatu mea, etiam moderatius id sit.", "Suas summo quo ex. In vim natum novum mollis. Est ei fuisset evertitur. Modus debet quo an, quo ut stet debet consectetuer, dicant salutandi ius an. Ad fugit viderer vim, cum ne eirmod rationibus. Ius purto inciderint cu. An stet regione numquam eam, facer verear invidunt duo ea, qui accumsan gubergren id.", "Mel ex homero legendos delicatissimi, no inani tollit pericula vix, nec ea invidunt deseruisse reprehendunt. Id case accusamus theophrastus est, per id malorum ullamcorper. Veritus convenire est et. At mei noluisse consequat, fastidii deterruisset an mea."],         
          "background": {
            "1": {
              "url": "/assets/images/skyline.jpg",
              "alt": "Image of skyline",
              "annotation": "Scholarly annotation of skyline image"
            }
          }
        }
      },

      "display": "1",
      "hr": "1"

    };

    $scope.textColumn = textColumn;

  }
]);