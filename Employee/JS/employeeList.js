var app = angular.module("DetailsApp",[]);
app.controller('employeeAppCtrl',["$scope","convertServ","$interval",function($scope,convertServ,$interval){
		
	//creating a database for the storage
	$scope.employeeDataList = [];
	$scope.EmpData = false;
	$scope.EmpData1 = false;
	
	
	
	//function for adding an employee
	$scope.add_Employee = function(){
		$scope.EmpData = true;
		$scope.EmpData1 = false;
	}
	
	//function for saving the details of newEmployee
	$scope.addNewEmployee = function(Emp){
		
		$scope.EmpData = true;
		$scope.EmpData1 = false;
		console.log(Emp);
		
		//checking the condition whether employee is empty or undefined
		if(Emp!=null || Emp != undefined){
			//checking conditions of each and every detail of the employee
			if((Emp.Id != null || Emp.Id != undefined)||(Emp.name != null || Emp.name != undefined)||(Emp.des != null || Emp.des != undefined)||
			(Emp.sal != null || Emp.sal != undefined)||(Emp.exp != null || Emp.exp != undefined)){
					var flag = true;
					
					//running a foreach loop and verifying the emp.id 
					($scope.employeeDataList).forEach(function(obj, index){
						if(obj.Id == Emp.Id){
							Emp.Id = "";
							alert("Employee Details already exist");
							flag = false;
						}
					
					});
					
					//if employee.id does not exist then we create a newemployee
					if(flag){
						$scope.ischecked = false;
						($scope.employeeDataList).push(angular.copy(Emp));
						console.log($scope.employeeDataList)
						Emp.Id = "";
						Emp.name = "";
						Emp.des = "";
						Emp.sal = "";
						Emp.exp = "";
					};
						
			}else{
				alert("Enter all credentials")
			}		
				
		}else{
			alert("Please enter valid employee details");
		}
	
	}
	//function for going back to mainpage
	$scope.Done = function(){
		$scope.EmpData = false;
		$scope.EmpData1 = false;
	}
	//to delete a record from the table of employees where a employee is selected
	$scope.deleteRecord = function(){
		var newDataList=[];
		$scope.selectedAll = false;
		//foreach loop to check the selected employees	
		angular.forEach($scope.employeeDataList, function(selected){
			
			if(!selected.selected){
				//push the selected employees into newArray
			   newDataList.push(selected);
			}
		}); 
         $scope.employeeDataList = newDataList;   
	};
	
	//checkall the options
	 $scope.checkAll = function() {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
		//selecting all options
        angular.forEach($scope.employeeDataList, function(employee) {
            employee.selected = $scope.selectedAll;
        });
    };
	
	//edit the details of which employee selected through checkbox
	$scope.editDetails = function(){
		console.log($scope.employeeDataList);
		var count=0;
		angular.forEach($scope.employeeDataList, function(selected){
			if(selected.selected){
				
				count++;
			}
		})
	
		if(count==1){
			$scope.EmpData1 = true;
			angular.forEach($scope.employeeDataList, function(selected){
				if(selected.selected){
					$scope.Emp=selected;
				
				}
			
			})
		
		}else{
			if(count==0){
				alert("Please select atleast one employee");
			}else{
				alert("Selection Limit Exceeded");
			}
		}
	}
	$scope.changeEmployeeDetails = function(){
		$scope.EmpData = false;
		$scope.EmpData1 = false;
		$scope.ischecked=false;	
	}
	//to export the file from JSONtoCSV format
	$scope.export = function(){
		
		convertServ.export($scope.employeeDataList);
	
	}
	
	//to import a file from directory and converting CSVtoJSON
	$scope.import = function(){
		var reader = new FileReader();
		
		//onload function to convert CSVtoJSON
		reader.onload = function(event) {
			var data = convertServ.CSVtoJSON(event.target.result);
			$scope.$apply(function(){
				$scope.employeeDataList = data;
			})
		};
		
		//reading the file 
		reader.readAsText(angular.element(file)[0].files[0]);
		
		if($scope.employee.selected==""){
		$scope.employee.selected==false;
	}
	}
}]);	


	//creating a service for import and export the file services
	app.service("convertServ",function(){

		// This function takes an json array object 
		// and converts it into a .csv type content
		// and returns it in a string format. 
		
		function JSONtoCSV(objArray){

			// Make a copy of input json array object.
			var array = angular.copy(objArray);
			
			// Create a string variable.
			var str = '';
			
			// Get the keys of object in given array.
			var header = Object.keys(array[0]);
			
			// Add those header keys to str with ','(comma) separator.
			// and make cursor start from new line. 
			header.forEach(function(element, index){
				
				str = str + element + ',';
			
			});
			
			str = str+ '\r\n';
			
			// Now add all objects data in array as row.
			for (var i = 0; i < array.length; i++) {
				var line = '';

				for (var index in array[i]) {
					line += array[i][index] + ',';
				}

				line.slice(0,line.Length-1); 

				str += line + '\r\n';
			}
			
			// return final string with total content which in .csv format
			return str;
		}


		// this function used convert .csv format data string into JSON object.
		this.CSVtoJSON = function(csvData){
			
			// Split string with '\n' (new line) in lines of array
			var lines = csvData.split("\n");

			var result = [];
			
			// first line will be column headings which is nothing but keys to objects.
			// split them with ',' separator. 
			var headers=lines[0].split(",");

			// now forming array of json objects by using data rows.
			for(var i=1;i<lines.length-1;i++){

				var obj = {};
				var currentline=lines[i].split(",");

				// making each object with its respective key,value pairs.
				for(var j=0;j<headers.length-1;j++){
					obj[headers[j]] = currentline[j];
				}
				
				// push each object into array.
				result.push(obj);

			}
			
			// return that total array of json objects.
			return result;
		}

		// this function is to download exported data.
		this.export = function(objArray){
			
			// converting json array into .csv formated string.
			var data = JSONtoCSV(objArray);
			
			// create a blob obj with content data and with its type.
			var blob = new Blob([data], {type: 'text/csv'});
			
			// create anchor element to download file.
			var a = document.createElement('a');
			
			// make a URL object to that blob file and give it to href of anchor element.
			a.href = URL.createObjectURL(blob);
			
			// now make download attribute to anchor element with requires downloaded filename.
			a.download = "EmployeeDetails.csv";
			
			// now initiate click to that anchor to download that exported .csv file
			a.click();

		}

	});


