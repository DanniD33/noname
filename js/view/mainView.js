
// const form = document.getElementById('signup');
// const firstForm = document.forms[0]; // accessing first form
// const formByName = document.forms['formName']; // accessing form by name
// const formById = document.forms['formId']; // accessing form by id


// const container = document.getElementById('container');


// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const name = document.getElementById('fname');
// const bday = document.getElementById('dob');


// const formEl = document.getElementsByClassName("form-container sign-in");

// loginBtn.addEventListener('click', () => {
//   container.classList.remove("active");
//   // formEl.style.display = 'block';
//   // regEl.style.display = 'none';
//   // dataEntry();
// });


// const dataEntry = formEl[0].addEventListener("submit", async (event) => {
//   // const formInputs = formEl[0].querySelectorAll('input');
//     event.preventDefault();
//     const formData = {};
//     formData.email = email.value;
//     formData.password = password.value;
//   console.log(formData);

//   fetch("/greetings"
//   ,{
//         method: "POST",
//         // mode: "Access-Control-Allow-Origin",
//         // mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
        
//       }
//       ).then(function (response, err) {
//         if (!response) {
//           // throw new Error("Network response was not ok");
//           // throw new Error();
//           console.log('err', err)
//         } 
//         // else{
//           // return response.json();
//           // console.log(typeof response.json(), response.json());
//           // if (response.json())
//           let promObj = response.json();
//           // console.log('SUCCESS', promObj);
//           return promObj;
//           // let resObj = JSON.parse(promObj);
//           // console.log('resObj ', resObj);
//         // }
//         // console.log(response.json());
//         // console.log(response.text());

//         // console.log(typeof response, response);
//         // console.log(response.json());

// //         let jsonData = response.map(item => JSON.stringify(item))
// // console.log(jsonData)


//         // response.clone().json();
//         // return response.json();
//         // window.location.href = "/user/login";
//         // window.location.href = "http://localhost:3000/user/login"


        
//       })
//       .then(function (data) {
        
//         if (data){
//           // console.log('data ', data);
//           // let id = data
//           if(data.status === true){
//             // console.log('status from brcypt came back true. we should redirect')
//             // console.log('data from fetch 383', data.id);
//             console.log('data from fetch 383', data.username);

//             // return data


//             // window.location.href = "/user/login";
//           }
//           // window.location.href = "http://localhost:3000/user/login"
//           // window.open("/user/${id}");
//           // window.location.assign('profile.html');
//           console.log('data on 388', data);
//           // window.location.href = "/"
//         }

//         // Process and display the response data
//         // data = data.json();
//         // data = data.json();
//         // console.log(data);
//         // return data;
//         // console.log('couldn\'t redirect');
//         // console.error(err);
//         // console.log('data', typeof data, data);
//         // window.location.assignn("../static/homepage/profile.html");

//       })
//       .catch(function (error) {
//         // Handle errors
//         console.log('error from login line 385 ', error);
//         console.log(formData);
//         console.error("Fetch request went through but cannot retrieve data:", error);
//       })
      
      
// });

// ___________________________----------------------------------_________________________

const container = document.getElementById('container');


const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('fname');
const bday = document.getElementById('dob');


const formEl = document.getElementsByClassName("form-container sign-in");

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
  // formEl.style.display = 'block';
  // regEl.style.display = 'none';
  // dataEntry();
});


const dataEntry = formEl[0].addEventListener("submit", async (event) => {
  // const formInputs = formEl[0].querySelectorAll('input');
    event.preventDefault();
    const formData = {};
    formData.email = email.value;
    formData.password = password.value;
  console.log(formData);

  fetch("http://localhost:8080/greetings"
  ,{
        method: "POST",
        // mode: "No Access-Control-Allow-Origin",
        // mode: "cors",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        
      }
      ).then(function (response, err) {
        if (!response) {
          // throw new Error("Network response was not ok");
          // throw new Error();
          console.log('err', err)
        } 
        // else{
          // return response.json();
          // console.log(typeof response.json(), response.json());
          // if (response.json())
          let promObj = response.json();
          // console.log('SUCCESS', promObj);
          return promObj;
          // let resObj = JSON.parse(promObj);
          // console.log('resObj ', resObj);
        // }
        // console.log(response.json());
        // console.log(response.text());

        // console.log(typeof response, response);
        // console.log(response.json());

//         let jsonData = response.map(item => JSON.stringify(item))
// console.log(jsonData)


        // response.clone().json();
        // return response.json();
        // window.location.href = "/user/login";
        // window.location.href = "http://localhost:3000/user/login"


        
      })
      .then(function (data) {
        
        if (data){
          // console.log('data ', data);
          // let id = data
          if(data.status === true){
            // console.log('status from brcypt came back true. we should redirect')
            // console.log('data from fetch 383', data.id);
            console.log('data from fetch 383', data.username);

            // return data


            // window.location.href = "/user/login";
          }
          // window.location.href = "http://localhost:3000/user/login"
          // window.open("/user/${id}");
          // window.location.assign('profile.html');
          console.log('data on 388', data);
          // window.location.href = "/"
        }

        // Process and display the response data
        // data = data.json();
        // data = data.json();
        // console.log(data);
        // return data;
        // console.log('couldn\'t redirect');
        // console.error(err);
        // console.log('data', typeof data, data);
        // window.location.assignn("../static/homepage/profile.html");

      })
      .catch(function (error) {
        // Handle errors
        console.log('error from login line 385 ', error);
        console.log(formData);
        console.error("Fetch request went through but cannot retrieve data:", error);
      })
      
      
});


