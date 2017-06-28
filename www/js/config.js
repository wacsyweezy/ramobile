/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider, $httpProvider) {
	
	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/login_two_columns");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: true
    });

    $stateProvider
		.state('login_two_columns', {
            url: "/login_two_columns",
            templateUrl: "views/login_two_columns.html",
            data: { pageTitle: 'Authentication', specialClass: 'gray-bg' }
        })
        .state('dashboards', {
            abstract: true,
            url: "/dashboards",
            templateUrl: "views/common/content.html",
        })
		.state('ra', {
            abstract: true,
            url: "",
            templateUrl: "views/common/content.html",
        })
		// RBAC State Hooks
		.state('ra.viewmodules', {
            url: "/rbac/index",
            templateUrl: "views/rbac/viewmodules.html",
        })
		.state('ra.addmodules', {
            url: "/rbac/addmodules",
            templateUrl: "views/rbac/addmodule.html",
			controller: 'RbacCtrl'
        })
		.state('ra.viewtasks', {
            url: "/rbac/viewtasks",
            templateUrl: "views/rbac/viewtasks.html",
        })		
		.state('ra.addtasks', {
            url: "/rbac/addtasks",
            templateUrl: "views/rbac/addtasks.html",
        })
		.state('ra.viewprivileges', {
            url: "/rbac/viewprivileges",
            templateUrl: "views/rbac/viewprivileges.html",
			controller: 'RbacCtrl'
        })
		.state('ra.addprivileges', {
            url: "/rbac/addprivileges",
            templateUrl: "views/rbac/addprivileges.html",
			controller: 'RbacCtrl'
        })
		.state('ra.viewroles', {
            url: "/rbac/viewroles",
            templateUrl: "views/rbac/viewroles.html",
			controller: 'RbacCtrl'
        })
		.state('ra.addroles', {
            url: "/rbac/addroles",
            templateUrl: "views/rbac/addroles.html",
			controller: 'RbacCtrl'
        })
		.state('nba', {
            abstract: true,
            url: "",
            templateUrl: "views/common/content.html",
        })
		// NBA State Hooks
		.state('nba.business', {
            url: "/nba/business",
            templateUrl: "views/nba/business.html",
			controller: 'NbaCtrl'
        })
		.state('nba.predictive', {
            url: "/nba/predictive",
            templateUrl: "views/nba/predictive.html",
			controller: 'NbaPredictiveCtrl'
        })
		.state('nba.adaptive', {
            url: "/nba/adaptive",
            templateUrl: "views/nba/adaptive.html",
			controller: 'NbaCtrl'
        })
		.state('nba.recommendation', {
            url: "/nba/recommendation",
            templateUrl: "views/nba/recommendation.html",
			resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/footable/footable.all.min.js', 'css/plugins/footable/footable.core.css']
                        },
                        {
                            name: 'ui.footable',
                            files: ['js/plugins/footable/angular-footable.js']
                        }
                    ]);
                }
            },
			controller: 'NbaRecommendationCtrl',
        })
		// Diary Hooks
		.state('ra.contactManager', {
            url: "/diary/contactmanager",
            templateUrl: "views/diary/contactmanager.html",
			resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/footable/footable.all.min.js', 'css/plugins/footable/footable.core.css']
                        },
                        {
                            name: 'ui.footable',
                            files: ['js/plugins/footable/angular-footable.js']
                        }
                    ]);
                }
            },
			controller: 'ContactCtrl',
        })
		.state('ra.activitiesIndex', {
            url: "/diary/activitiesindex",
            templateUrl: "views/diary/activitiesindex.html",
			resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/footable/footable.all.min.js', 'css/plugins/footable/footable.core.css']
                        },
                        {
                            name: 'ui.footable',
                            files: ['js/plugins/footable/angular-footable.js']
                        }
                    ]);
                }
            },
			controller: 'ActivityCtrl',
        })
		.state('ra.addActivities', {
            url: "/diary/addactivities",
            templateUrl: "views/diary/addactivities.html",
			controller: 'FormCtrl'
        })
		.state('ra.addTask', {
            url: "/diary/addtask",
            templateUrl: "views/diary/addtask.html"
        })
		.state('ra.createActivities', {
            url: "/diary/createactivities",
            templateUrl: "views/diary/createactivities.html",
			resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
						{
                            files: ['js/plugins/moment/moment.min.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            files: ['js/plugins/dualListbox/jquery.bootstrap-duallistbox.js','css/plugins/dualListbox/bootstrap-duallistbox.min.css']
                        },
                        {
                            name: 'frapontillo.bootstrap-duallistbox',
                            files: ['js/plugins/dualListbox/angular-bootstrap-duallistbox.js']
                        }

                    ]);
                }
            },
			controller: 'FormCtrl'
        })
		.state('ra.diaryDashboard', {
            url: "/diary/dashboard",
            templateUrl: "views/diary/dashboard.html"
        })
		.state('ra.nbadashboard', {
            url: "/nba/dashboard",
            templateUrl: "views/nba/dashboard.html",
			controller: 'RbacCtrl'
        })
        .state('dashboards.dashboard_2', {
            url: "/dashboard_2",
            templateUrl: "views/dashboard_2.html",
            data: { pageTitle: 'Dashboard 2' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['css/plugins/c3/c3.min.css', 'js/plugins/d3/d3.min.js', 'js/plugins/c3/c3.min.js']
                        },
                        {
                            serie: true,
                            name: 'gridshore.c3js.chart',
                            files: ['js/plugins/c3/c3-angular.min.js']
                        },
						{
                            serie: true,
                            name: 'angular-chartist',
                            files: ['js/plugins/chartist/chartist.min.js', 'css/plugins/chartist/chartist.min.css', 'js/plugins/chartist/angular-chartist.min.js']
                        }
                    ]);
                }
            },
			controller: 'DashCtrl'
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
