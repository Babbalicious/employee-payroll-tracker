// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

let employeesArray = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  let keepAdding = true;

  while (keepAdding) {
    //create a new object for each employee
    let employee = {
      firstName: window.prompt("Enter first name:"),
      lastName: window.prompt("Enter last name:"),
      //added parseFloat because salary was remaining a string throughout code
      salary: parseFloat(window.prompt("Enter salary:")),
    };

    //salary must be a number or it defaults to zero
    if (isNaN(employee.salary)) {
      employee.salary = 0;
    }

    //add employee to the employeesArray
    employeesArray.push(employee);

    console.log(employeesArray);
    console.log(employeesArray.length);

    keepAdding = window.confirm("Would you like to add another employee?");
  }

  //return the array after the loop is finished
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let averageSalary;

  for (let i = 0; i < employeesArray.length; i++) {
    const index = employeesArray[i];
    const employeeSalary = index.salary;
    totalSalary += employeeSalary;
  }
  averageSalary = totalSalary / employeesArray.length;
  console.log(`The number of employees is ${employeesArray.length}`);
  console.log(`The average salary is ${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[index];
  console.log(
    `Random employee: ${randomEmployee.firstName} ${randomEmployee.lastName}.`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
