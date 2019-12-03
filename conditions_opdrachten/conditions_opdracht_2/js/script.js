//javascript code
// function myFunction() {
//     alert("Sorry, je hebt te weinig saldo!");
//   }

  function myFunction() {
    var tekst;
    var person = prompt("Please enter the ammount you want to withdraw:", "0");
    if (person == null || person == "") {
      tekst = "User cancelled the prompt.";
    } else {
      tekst = "The enterd ammount is" + person + "! We are unable to withdraw your request right now";
    }
    document.getElementById("demo").innerHTML = tekst;
}