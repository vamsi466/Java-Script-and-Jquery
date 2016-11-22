$(document).ready(function(){

	//starting the functionality
	//considering an empty array of employeedetails
	var EmployeeDetails = [];
		console.log(EmployeeDetails);

		//doing an ajax call to get the ionformation/data of the employees which is there in json format
		//if the ajax call has a success output we get an array of output
		$.ajax({url: "employeedetails.json", success: function(result){
			console.log(result)

			//getting the array through success of ajax call we store it in EmployeeDetails[]
			EmployeeDetails = result;
			console.log(EmployeeDetails);

		//appending the table to the div with id detailstoshow
		$("#detailstoshow").append($('<table class="table table-hover"></table>'))

		//storing that appended div in a variable tab
		var tab = $("#detailstoshow").children()[0];

		//now appending tablebody as <tbody> to that tab
		$(tab).append($("<tbody></tbody>"));

		//now that child of tab is stored in variable table
		var table = $(tab).children()[0];

		//appending the row to the table as a child to it
		$(table).append($("<tr></tr>"));

		//the child is stored in a variable named header
		var header = $(table).children()[0];

		//now iterarting the first row and getting the index by key value pairs
		//now appending that key values as the header to each column
			for(var index in EmployeeDetails[0]){
				$(header).append($("<th>"+index+"</th>"));
			}



			//now iterating the employees in the EmployeeDetails[] to get all the employee details
			var employeeslength = EmployeeDetails.length;
			for(var i=0;i<employeeslength;i++){

				//declaring a row
				var row = $("<tr></tr>")

				//appending all the values to that row
				  $(row).append($("<td>"+EmployeeDetails[i].ID+"</td>"));
					$(row).append($("<td>"+EmployeeDetails[i].Name+"</td>"));
					$(row).append($("<td>"+EmployeeDetails[i].Designation+"</td>"));
					$(row).append($("<td>"+EmployeeDetails[i].Experience+"</td>"));
					$(row).append($("<td>"+EmployeeDetails[i].Salary+"</td>"));

					//now appending that row to the table after the header is done
				$(table).append(row);
			}
			//appending all the employee 


		}});
});
