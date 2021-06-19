let n = new Date();
//Code for displaying the current date
let date = n.getDate();
let month = n.getMonth();
let year = n.getFullYear();
document.getElementById('datecontent').innerHTML = "Date : " + date + '/' + month + '/' + year;
document.addEventListener('click',rightarrowclick);