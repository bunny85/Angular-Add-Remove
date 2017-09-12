var helloApp = angular.module("helloApp", []);
					helloApp.controller("CompanyCtrl", function($scope) {
					$scope.companies = [{ 'name':'Google',
						'employees': 125000,
						'headoffice': 'USA'},
						{ 'name':'NTT',
							'employees': 100000,
							'headoffice': 'USA'},
							{ 'name':'Bloomberg',
								'employees': 115000,
								'headoffice': 'USA'},
								{ 'name':'Apple',
									'employees': 150000,
									'headoffice': 'USA'},
									{ 'name':'JPMC',
										'employees': 90000,
										'headoffice': 'USA'},
					];
							$scope.addRow = function(){
						$scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
						$scope.name='';
						$scope.employees='';
						$scope.headoffice='';
					};
									$scope.removeRow = function(name){
									var index = -1;
							var comArr = eval( $scope.companies );
							for( var i = 0; i < comArr.length; i++ ) {
								if( comArr[i].name === name ) {
									index = i;
									break;
								}
							}
							if( index === -1 ) {
								alert( "Something gone wrong" );
							}
									$scope.companies.splice( index, 1 );
						};
					});