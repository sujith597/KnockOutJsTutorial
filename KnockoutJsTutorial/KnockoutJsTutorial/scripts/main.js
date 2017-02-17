function applyBinding(Fname, Lname, marks) {
    this.firstName = "Sujith";
    this.lastName = "Kumar";
    this.firstName2 = ko.observable("Sandeep");
    this.lastName2 = ko.observable("Kumar");
    this.firstName3 = ko.observable("Ravi");
    this.lastName3 = ko.observable("Sankar");
    this.hidemeOut = ko.observable(false);
    this.fullName3 = ko.computed(function () {
        return this.firstName3() + " " + this.lastName3();
    }, this);
    this.capMe = ko.observable("im small now. Make me Upper");
    this.CapMefunction = function () {
        var currentName = this.capMe();
        this.capMe(currentName.toUpperCase());
    };
    this.studentsList = ko.observableArray([{ "Fname": "Student1", "LastName": "LName1" },
{ "Fname": "Student2", "LastName": "LName2", },
{ "Fname": "Student3", "LastName": "LName3" },
{ "Fname": "Student4", "LastName": "LName4" }]);

    this.studentsListForAdd = ko.observableArray([{ "Fname": "Student1", "LastName": "LName1" },
 { "Fname": "Student2", "LastName": "LName2" },
 { "Fname": "Student3", "LastName": "LName3" },
 { "Fname": "Student4", "LastName": "LName4" }]);
    this.lengthOfList = ko.computed(function () {
        //return this.studentsListForAdd().length;
    });

    this.addFName = ko.observable("Student5");
    this.addLName = ko.observable("LName5");
    this.addNewStudent = function () {
        this.studentsListForAdd.push({ "Fname": this.addFName(), "LastName": this.addLName() });
    };
    this.removeStudent = function (student) {
        this.studentsListForAdd().remove(student);
    };

    this.classes = ["Class 1", "Class 2", "Class 3", "Class 4"];
  

    this.Fname = Fname;
    this.Lname = Lname;
    this.marks = marks;

};


ko.applyBindings(new applyBinding("Sujith", "Kumar", 100));