function applyBinding() {
    this.firstName = "Sujith";
    this.lastName = "Kumar";
    this.firstName2 = ko.observable("Sandeep");
    this.lastName2 = ko.observable("Kumar");
    this.firstName3 = ko.observable("Ravi");
    this.lastName3 = ko.observable("Sankar");
    this.fullName3 = ko.computed(function () {
        return this.firstName3() + " " + this.lastName3();
    }, this);
    this.capMe = ko.observable("im small now. Make me Upper");
    this.CapMefunction = function () {
        var currentName = this.capMe();
        this.capMe(currentName.toUpperCase());
    };
         this.studentsList = ko.observableArray([{ "Fname": "Student1", "LastName": "LName1" },
    { "Fname": "Student2", "LastName": "LName2" },
    { "Fname": "Student3", "LastName": "LName3" },
    { "Fname": "Student4", "LastName": "LName4" }]);
       
       this.studentsListForAdd = ko.observableArray([{ "Fname": "Student1", "LastName": "LName1" },
    { "Fname": "Student2", "LastName": "LName2" },
    { "Fname": "Student3", "LastName": "LName3" },
    { "Fname": "Student4", "LastName": "LName4" }]);

       this.addFName = ko.observable("Student5");
       this.addLName = ko.observable("LName5");
       this.addNewStudent = function () {
           this.studentsListForAdd.push({"Fname" : this.addFName(), "LastName" : this.addLName()});
       };
};

ko.applyBindings(new applyBinding());