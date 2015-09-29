//SampleForm, Damian Villanueva

var SampleForm = function(){
    this.genders = {
        'M': 'M',
        'F': 'F'
    };
    this.hobbies = {
        'Skiing': 'ski',
        'Running':'run',
        'Eating': 'eat',
        'Sleeping': 'sleep',
        'Reading': 'read',
        'Coding': 'code'
    };
    this.heards = {
        'Choose..':'',
        'Press': 'press',
        'Internet': 'net',
        'Word of mouth': 'mouth',
        'Other..': 'other'
    };
};
SampleForm.prototype.create = function(data){

    this.setFullName(data.fullName);
    this.setEmail(data.email);
    this.selectGender(data.gender);
    this.selectHobbie(data.hobbie1);
    this.selectHobbie(data.hobbie2);
	this.selectHobbie(data.hobbie6);
    this.selectHeard(data.heard);
    this.setMessage(data.message);
    this.clickValidateButton();
};
SampleForm.prototype.setFullName = function(fullName){
    $('input[name = "fullname"]').val(fullName);
};
SampleForm.prototype.setEmail = function(email){
    $('input[name = "email"]').val(email);
};
SampleForm.prototype.selectGender = function(gender){
    $('input[type = "radio"][value="' + this.genders[gender] + '"]').click();
};
SampleForm.prototype.selectHobbie = function(hobbie){
    $('input[type = "checkbox"][value="' + this.hobbies[hobbie] + '"]').click();
};
SampleForm.prototype.selectHeard = function(heard){
    $('#heard').val(this.heards[heard]);
};
SampleForm.prototype.setMessage = function(message){
    $('textarea[name = "message"]').val(message);
};
SampleForm.prototype.clickValidateButton = function(){
    $('span[class = "btn btn-default"]').click();
};
var data = {
    'fullName': 'Damian Villanueva',
    'email': 'Damian.Villanueva@fundacion-jala.org',
    'gender':'M',
    'hobbie1': 'Running',
    'hobbie2': 'Eating',
	'hobbie6': 'Coding',
    'heard': 'Internet',
    'message': 'this is a message for JavaScript Final Test'
};
var myForm;
$(document).ready(function(){

    myForm = new SampleForm();

    myForm.create(data);
});


module.exports = SampleForm;
