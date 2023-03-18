// დღევანდელ შეხვედრაზე,
// https://reqres.in/api/users?page=2
// მოცემული ლინკიდან გვაქვს გაკეთებული load more & load next and load previuos მაგალითები;

//task 1
//https://reqres.in/api/unknown წამოიღეთ fetch-ის საშუალებით name + color;

// function getUser(){
//     fetch('https://reqres.in/api/unknown')
//     method: "GET"
// };

// .then(function (mosuliinfo){
//     if (mosuliinfo.status !== 200){
//         throw mosuliinfo.status;
//     }
//     return mosuliinfo.json();
// })
// .then(function(mosuliinfoJs){
//     const fragment = document.createDocumentFragment();
// mosuliinfoJs.data.forEach(element => {
//     let li = document.createElement('li');
// li.textContent = `${element.name}, ${element.color}`;
// fragment.appendChild(li);

// });
// })
// .catch (function(error){
//     console.log(error);
//     if(error == 404){
//         let p = document.createElement('p');
//         p.textContent = "Page not Found";
//         document.getElementById("ajax-block").appendChild(p);
// document.getElementById("users-info").appendChild(fragment);
//     }
// });

// getUser(mosuliinfo);

// დავალება 2:
// https://reqres.in/api/users?page=2 წამოიღეთ xml http requistის საშუალებით სახელი გვარი + სურათი;

//task 2

function getUser() {
    let response = this.responseText;
  console.log(this.responseText);
 
  let responseData = JSON.parse(response);
  console.log(responseData);
}

let request = new XMLHttpRequest();

request.addEventListener("load", getUser);
request.open("GET", "https://reqres.in/api/users?page=2");
request.send();

getUser();

responseData.data.forEach(element => {
    let li = document.createElement('li');
li.textContent = `${element.first_name}, ${element.last_name} , ${element.avatar}`;
fragment.appendChild(li);
document.getElementById("users-info").appendChild(fragment);
});

// დავალება 3:
// ლექციაზწ დაწერილ კოდს load next & load prev users დაუმატეთ ვალიდაცია

// წარმატებები
