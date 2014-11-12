'use strict';

angular.module('cv2')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll, $window) {
    $scope.education = [
      { StartDateText: '2006', EndDateText: '', TitleKey: 'university_title', 
        TitleText: 'Tampere University of Technology', TitleIngressText: 'Software Engineering, Hypermedia', flipped: false },
      { StartDateText: '2003', EndDateText: '2006', TitleKey: 'highschool_title', 
        TitleText: 'Pälkäne High School', TitleIngressText: '', flipped: false },
    ];

    $scope.workexperience = [
      { StartDateText: '12/2011', EndDateText: '', flipped: false,
        TitleKey: 'sac_title', TitleText: 'Saarinen & Aho Consulting', TitleIngressText: 'CTO', DescriptionKey: 'sac_desc',
        DescriptionText: 'Variety of different web projects. For example implementation of autorekisteri.fi (php, mysql, javascript), subcontractor for TeamUp (ASP.NET MVC4), internal web applications for smaller customers (django, bootstrap, backbone / MEAN stack).' },
      { StartDateText: '06/2011', EndDateText: '09/2012',
        TitleKey: 'innow_title', DescriptionKey: 'innow_desc', TitleText: 'Inno-W Oy', TitleIngressText: 'Software Developer',
        DescriptionText: 'Web application implementation with SharePoint and Drupal. Drupal module development.', flipped: false },
      { StartDateText: '08/2009', EndDateText: '11/2010',
        TitleKey: 'joiner_title', DescriptionKey: 'joiner_desc', TitleText: 'Joiner Oy', TitleIngressText: 'Software Developer',
        DescriptionText: 'Desktop sofware development with C#.NET + WPF, Adoble Flex + Air and Java + Spring + Hibernate. Oracle and PostgreSQL database design.', flipped: false },
      { StartDateText: '10/2007', EndDateText: '',
        TitleKey: 'softerhead_title', DescriptionKey: 'softerhead_desc', TitleText: 'Softerhead Oy', TitleIngressText: 'Web designer',
        DescriptionText: 'Simple website design project including HTML, CSS, some PHP and graphics design.', flipped: false },
      { StartDateText: '07/2007', EndDateText: '08/2007',
        TitleKey: 'tut_title', DescriptionKey: 'tut_desc', TitleText: 'Department of Computer Science, Tampere University of Technology', TitleIngressText: 'Web developer',
        DescriptionText: 'Internal tools for the department employees with PHP and PostgreSQL.', flipped: false }
    ];

    $scope.positionsoftrust = [
      { StartDateText: '12/2011', EndDateText: '', 
        TitleKey: 'sac_title', DescriptionKey: 'sac_desc', flipped: false },
      { StartDateText: '06/2011', EndDateText: '09/2012',
        TitleKey: 'innow_title', DescriptionKey: 'innow_desc', flipped: false }
    ];

    $scope.age = Math.abs(new Date(new Date() - new Date(1987, 8, 25, 0, 0, 0, 0)).getFullYear() - 1970); 


    $scope.isFlipped = function(g, i, flip) {
      var arr = [];

      switch(g) {
        case 'edu': 
          arr = $scope.education;
          break;
        case 'work': 
          arr = $scope.workexperience;
          break;
        case 'pot': 
          arr = $scope.positionsoftrust;
          break;
        default: 
          arr = [];
          break;
      }

      if(flip) {
        arr[i].flipped = !arr[i].flipped;
      }
    
      return arr[i].flipped;
    };

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    var w = angular.element($window);
    w.bind('resize', function() {
      $scope.$digest();
    });
  });
