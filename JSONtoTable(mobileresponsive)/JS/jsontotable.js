$(document).ready(function(){
	var EmployeeDetails = [];
		console.log(EmployeeDetails);
		$.ajax({url: "employeedetails.json", success: function(result){
			console.log(result)
			EmployeeDetails = result;
			console.log(EmployeeDetails);
		$("#detailstoshow").append($('<table class="table table-hover"></table>'))
		var tab = $("#detailstoshow").children()[0];
		$(tab).append($("<tbody></tbody>"));
		var table = $(tab).children()[0];
		$(table).append($("<tr></tr>"));
		var header = $(table).children()[0];

			for(var index in EmployeeDetails[0]){
				$(header).append($("<th>"+index+"</th>"));
			}
			//appending array elements to DOM

			for(var i=0;i<EmployeeDetails.length;i++){
				var row = $("<tr></tr>")
				  $(row).append($("<td>"+EmployeeDetails[i].ID+"</td>"));
					$(row).append($("<td>"+EmployeeDetails[i].Name+"</td>"));
					$(row).append($("<td>"+EmployeeDetails[i].Designation+"</td>"));
					$(row).append($("<td>"+EmployeeDetails[i].Experience+"</td>"));
					$(row).append($("<td>"+EmployeeDetails[i].Salary+"</td>"));
				$(table).append(row);
			}
			//function to check for repetion

		}});
});
