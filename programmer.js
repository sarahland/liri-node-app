function Programmer(name, position, age, language) {
   this.name = name;
   this.position = position;
   this.age = age;
   this.language = language;
}
this.printInfo = function () {
	console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguage: " + this.language);

};
var bob = new Programmer("Bob smith", "supreme CodeMaster", "25", "English");

bob.pringInfo();
