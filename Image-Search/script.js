// const getMeCoffee =  () =>{
//     setTimeout(()=>{
//         const coffee = "Lo Bhai Coffee";
//         return coffee;
//     }, 500);
// }
// console.log(getMeCoffee());

const getMeCoffee = (callback) => {
  setTimeout(() => {
    const coffee = "Lo Bhai Coffee";
    //after 500ms it will call a callback func. with coffee data
    callback(coffee);
  }, 500);
};

const getMeBiscuit = (coffee, callback) => {
  setTimeout(() => {
    if (coffee == "Lo Bhai Coffee") {
      const biscuit = "Lo Bhai Biscuit";
      //after 500ms it will call a callback func. with Biscuit data
      callback(biscuit);
    }
  }, 500);
};

const getMeBill = (biscuit, callback) => {
  setTimeout(() => {
    if (biscuit == "Lo Bhai Biscuit") {
      const bill = "Lo Bhai Bill";
      //after 500ms it will call a callback func. with Bill data
      callback(bill);
    }
  }, 500);
};

getMeCoffee((coffee) => {
  getMeBiscuit(coffee, (biscuit)=>{
    getMeBill(biscuit, (bill)=>{
        console.log(bill, "paise do");
    })
  })
});
