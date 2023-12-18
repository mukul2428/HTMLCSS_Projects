// const getMeCoffee =  () =>{
//     setTimeout(()=>{
//         const coffee = "Lo Bhai Coffee";
//         return coffee;
//     }, 500);
// }
// console.log(getMeCoffee());

//using callback - asynchronous task

// const getMeCoffee = (callback) => {
//   setTimeout(() => {
//     const coffee = "Lo Bhai Coffee";
//     //after 500ms it will call a callback func. with coffee data
//     callback(coffee);
//   }, 500);
// };

// const getMeBiscuit = (coffee, callback) => {
//   setTimeout(() => {
//     if (coffee == "Lo Bhai Coffee") {
//       const biscuit = "Lo Bhai Biscuit";
//       //after 500ms it will call a callback func. with Biscuit data
//       callback(biscuit);
//     }
//   }, 500);
// };

// const getMeBill = (biscuit, callback) => {
//   setTimeout(() => {
//     if (biscuit == "Lo Bhai Biscuit") {
//       const bill = "Lo Bhai Bill";
//       //after 500ms it will call a callback func. with Bill data
//       callback(bill);
//     }
//   }, 500);
// };

// getMeCoffee((coffee) => {
//   console.log(coffee);
//   getMeBiscuit(coffee, (biscuit)=>{
//     console.log(biscuit);
//     getMeBill(biscuit, (bill)=>{
//         console.log(bill);
//         console.log("paise do");
//     })
//   })
// });

// const getMe3Coffee = () => {
//   const coffeePromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       const coffee = "Lo Bhai Coffee";
//       resolve(coffee);
//     }, 500);
//   });
//   return coffeePromise;
// };
// console.log(getMe3Coffee());

//using promises asynchronous task
// const getMeCoffee = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const coffee = "Lo Bhai Coffee";
//       resolve(coffee);
//     }, 500);
//   });
// };

// const getMeBiscuit = (coffee) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (coffee == "Lo Bhai Coffee") {
//         const biscuit = "Lo Bhai Biscuit";
//         resolve(biscuit);
//       }
//     }, 500);
//   });
// };

// const getMeBill = (biscuit) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (biscuit == "Lo Bhai Biscuit") {
//         const bill = "Lo Bhai Bill";
//         resolve(bill);
//       }
//     }, 500);
//   });
// };

// getMeCoffee()
//   // whatever data passed in resolve will come here in coffee
//   .then((coffee) => {
//     console.log(coffee);
//     //called biscuit with coffee data
//     //this return statement will also return promise
//     return getMeBiscuit(coffee);
//   })
//   .then((biscuit) => {
//     console.log(biscuit);
//     //called bill with biscuit data
//     //this return statement will also return promise
//     return getMeBill(biscuit);
//   })
//   .then((bill) => {
//     console.log(bill);
//     console.log("paise do");
//   })
//   .catch((data) => {
//     console.log("Error");
//   });

// async function callingFunc(){
//   const coffee = await getMeCoffee();
//   console.log(coffee);
//   const biscuit = await getMeBiscuit(coffee);
//   console.log(biscuit);
//   const bill = await getMeBill(biscuit);
//   console.log(bill);
// }
// callingFunc();

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  input.addEventListener("input", (e) => {
    debounce(1500, () => {
      console.log(e.target.value);
    });
  });
  let timeout;
  function debounce(delay, callback) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, delay);
  }
});
