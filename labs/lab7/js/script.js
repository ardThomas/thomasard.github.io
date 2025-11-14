function init(){
//add your javascrip between these two lines of code
 
  let button = document.getElementById("entrybutton");

  function myFunction(){
    let userText = document.getElementById("entryinput").value;
    alert(userText);
    document.getElementById("textoutput").innerHTML = userText;
  }

  button.addEventListener("click", myFunction);

window.addEventListener('load', init);

