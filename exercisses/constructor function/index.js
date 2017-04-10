//var Person = function (namePassed, agePassed, isAlivePassed) {
//    this.name = namePassed;
//    this.age = agePassed;
//    this.isAlive = isAlivePassed;
//    this.hi = function () {
//        console.log(this.name + " says hello")
//    }
//};
//
//var methaq = new Person("methaq", 19, true);
//methaq.hi();

//var employees = [Name, Job title, Salary, Status];

var Employee = function (name, jobtitle, salary, status) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name);
        console.log("Jobtitle: " + this.jobtitle);
        console.log("Salary: " + this.salary);
        console.log("Status: " + this.status);
        
    }
};

var employees = [];

var Bob = new Employee("Bob", "V School Instructor", "$3000", "Part time" );
employees.push(Bob);
var jacob = new Employee("jacob", "seinor man", 100000000000000000000, "full time");
employees.push(jacob);

var methaq = new Employee("methaq", "Architec", 0.01, "part time");
employees.push(methaq);

for (i = 0; i < employees.length; i++){
    employees[i].printEmployeeForm()
}

