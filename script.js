// "use strict";

//--------------------------fetch-------------------------

// task 1 წამოიღეთ fetch-ის საშუალებით name + color;

// function getUsers{

// fetch("https://reqres.in/api/unknown", {
//   method: "GET",
// })
//   .then(function (mosuliInfo) {
//     if (mosuliInfo.status !== 200) {
//       throw mosuliInfo.status;
//     }
//     return mosuliInfo.json();
//   })

//   .then(function (mosuliInfoJs) {
//     console.log(mosuliInfoJs);

//     mosuliInfoJs.data.forEach((element) => {
//       let li = document.createElement("li");
//       li.textContent = `${element.name} ${element.color}`;

//       document.getElementById("users-info").appendChild(li);
//       document.getElementById("ajax-block").appendChild(li);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//------------------------xmlhttp request-------------------

//task 2  https://reqres.in/api/users?page=2  წამოიღეთ xml http requistის საშუალებით სახელი გვარი + სურათი;

// let currentPage = 1;
// let totalPagesServer;

// function getUsers(page) {
//   let request = new XMLHttpRequest();
//   request.addEventListener("load", function render() {
//     let response = this.responseText;
//     let mosuliInfoJs = JSON.parse(response);

//     let fragment = document.createDocumentFragment();

//     mosuliInfoJs.data.forEach((element) => {
//       let li = document.createElement("li");
//       li.classList.add("li-wrapper");

//       let pElement = document.createElement("p");
//       pElement.textContent = `${element.first_name} ${element.last_name}`;

//       let imgElement = document.createElement("img");

//       // imgElement.setAttribute("src", `${element.avatar}`);

//       imgElement.src = `${element.avatar}`;
//       li.appendChild(pElement);
//       li.appendChild(imgElement);
//       fragment.appendChild(li);
//     });

//     document.getElementById("users-info").innerHTML = " ";
//     document.getElementById("users-info").appendChild(fragment);

//     totalPagesServer = mosuliInfoJs.total_pages;
//   });
//   request.open("GEt", 'https://reqres.in/api/users?page=" + page');
//   request.send();
// }

// document.getElementById("prev").addEventListener("click", function () {
//   if (currentPage == 1) {
//     return;
//   }
//   currentPage -= 1;
//   getUsers(currentPage);
// });

// document.getElementById("next").addEventListener("click", function () {
//   if (currentPage === totalPagesServer) {
//     return;
//   }
//   currentPage += 1;
//   getUsers(currentPage);
// });

// getUsers(currentPage);

// //   task 3 ლექციაზე დაწერილ კოდს load next & load prev users დაუმატეთ ვალიდაცია

let currentPage = 1;
let totalPagesServer;

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (mosuliInfo) {
      if (mosuliInfo.status !== 200) {
        throw mosuliInfo.status;
      }
      return mosuliInfo.json();
    })
    .then(function (mosuliInfoJs) {
      let fragment = document.createDocumentFragment();

      mosuliInfoJs.data.forEach((element) => {
        let li = document.createElement("li");
        li.classList.add("li-wrapper");
        let pElement = document.createElement("p");
        pElement.textContent = `${element.first_name} ${element.last_name}`;

        let imgElement = document.createElement("img");

        // imgElement.setAttribute("src", `${element.avatar}`);

        imgElement.src = `${element.avatar}`;
        li.appendChild(pElement);
        li.appendChild(imgElement);
        fragment.appendChild(li);
      });
      document.getElementById("users-info").innerHTML = " ";
      document.getElementById("users-info").appendChild(fragment);

      totalPagesServer = mosuliInfoJs.total_pages;
    })

    .catch(function (error) {
      console.log(error);
      if (error == 404) {
        let p = document.createElement("p");
        p.textContent = "Page not found";
        document.getElementById("ajax-block").appendChild(p);
      }
    });
}

document.getElementById("prev").addEventListener("click", function () {
  if (currentPage == 1) {
    return;
  }
  currentPage -= 1;
  getUsers(currentPage);
});

document.getElementById("next").addEventListener("click", function () {
  if (currentPage === totalPagesServer) {
    return;
  }
  currentPage += 1;
  getUsers(currentPage);
});

getUsers(currentPage);
