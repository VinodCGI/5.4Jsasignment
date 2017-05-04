//Employee Array

var employeeArray =[
  employee1={name:"Vinod",
              age:"25",
			  salary:"50000",
			  address:{            //Nested object that holds the address of 1st employee
				  city:"bangalore",
				  state:"KA",
				  pin:"560076"
				}
	},
	employee2={name:"Kumar",
              age:"24",
			  salary:"5000",
			  address:{            //Nested object that holds the address of 2nd employee
				  city:"Hyderabad",
				  state:"AP",
				  pin:"500082"
				}
	},
	employee3={name:"Kohli",
              age:"24",
			  salary:"60000",
			  address:{            //Nested object that holds the address of 3rd employee
				  city:"Bangalore",
				  state:"KA",
				  pin:"500082"
				}
	},
	employee4={name:"Dhoni",
              age:"24",
			  salary:"5000",
			  address:{            //Nested object that holds the address of 4th employee
				  city:"Pune",
				  state:"Maharashtra",
				  pin:"500083"
				}
	},
	employee5={name:"John",
              age:"24",
			  salary:"5000",
			  address:{            //Nested object that holds the address of 5th employee
				  city:"Delhi",
				  state:"Delhi",
				  pin:"502082"
				}
	}
]
//To print employee2 details in console which is of index 1	
console.log(employeeArray[1].name);
console.log(employeeArray[1].age);
console.log(employeeArray[1].salary);
console.log(employeeArray[1].address.city);
console.log(employeeArray[1].address.state);
console.log(employeeArray[1].address.pin);