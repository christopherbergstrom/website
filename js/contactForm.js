var subject;
var message;
var submit;
var error;
window.onload = function()
{
  var subjectDiv = document.getElementById(subjectDiv);
  var contentDiv = document.getElementById(contentDiv);
  submit = document.form.submit.addEventListener("click", function(e)
  {
//    e.preventDefault();
    validate();	
  });
};
function validate()
{
  clearErrors();
  var name = document.form.name.value;
  if (!name)
    nameDiv.innerHTML="Name cannot be blank";
  var email = document.form.email.value;
  if(email.indexOf("@") === -1 || email.indexOf(".") === -1)
    emailDiv.innerHTML="Must be a valid email";
  var subject = document.form.subject.value;
  if (!subject)
    subjectDiv.innerHTML="Subject cannot be blank";
  var message = document.form.message.value;
  if (!message)
    messageDiv.innerHTML="Message cannot be blank";
  if (name && email && subject && message)
  {
    var generated = "Hello Chris, my name is "+name+", and my email is "+email+". \n";
    message = "\n"+message;
    generated += message;
    
//    window.open("mailto:christopherrbergstrom@gmail.com?subject="+subject+"&body="+generated, "emailWindow");
//    return false;
  }
}
function clearErrors()
{
  nameDiv.innerHTML="";
  emailDiv.innerHTML="";
  subjectDiv.innerHTML="";
  messageDiv.innerHTML="";
}
