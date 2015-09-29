//SampleFormTest.js

var SampleFormTest = function(){
	this.TrueForm = function(){
		var Sf = new SampleForm();
		Sf.setFullname('Damian Villanueva');
		Sf.setEmail('Damian.Villanueva@fundacion-jala.org');
		Sf.selectGender('M');
		Sf.selectHobbie('Running','Eating','Coding');
		Sf.selectHeard('Internet');
		Sf.setMessage('this is a message for JavaScript Final Test');
		Sf.clickValidateButton();
		
		if($('[class="bs-callout bs-callout-info"]').find('p').text()=="Everything seems to be ok :)")
		{
			return "passed, Everything seems to be ok :)";
		}
		else
		{
			return "Failed, This form seems to be invalid";
		}
	};
	
	this.FalseForm = function(){
		var Sf = new SampleForm();
		Sf.setFullname('');
		Sf.setEmail('Damian.Villanueva@fundacion-jala.org');
		Sf.selectGender('');
		Sf.selectHobbie('Running','Eating','Coding');
		Sf.selectHeard('');
		Sf.setMessage('');
		Sf.clickValidateButton();
		
		if($('[class="bs-callout bs-callout-info"]').find('p').text()=="This form seems to be invalid")
		{
			return "passed, This form seems to be invalid";
		}
		else
		{
			return "Failed, Everything seems to be ok :)";
		}
	};
};