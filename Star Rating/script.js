window.onload = () => {
  if (!sessionStorage.getItem("totalStars")) {
    sessionStorage.setItem("totalStars", 0);
  } else {
    console.log(sessionStorage.getItem("totalStars"));
    this.starSelected(JSON.parse(sessionStorage.getItem("totalStars")));
  }
};

// function starSelected(i) {
//   //   let star = document.getElementById(`star-${i}`);
//   //   let starAfter = window.getComputedStyle(star, "::after");
//   //   console.log(star);
//   //   star.style.borderBottom = '70px solid yellow';
//   //   star.style.setProperty("--red-color", "yellow");
//   //   starAfter['border-bottom']     '80px solid yellow'

//   switch (i) {
//     case 1:
//       var star1 = document.getElementById(`star-1`);
//       star1.style.setProperty("--red-color", "yellow");
//       var star2 = document.getElementById(`star-2`);
//       star2.style.setProperty("--red-color", "red");
//       var star3 = document.getElementById(`star-3`);
//       star3.style.setProperty("--red-color", "red");
//       var star4 = document.getElementById(`star-4`);
//       star4.style.setProperty("--red-color", "red");
//       var star5 = document.getElementById(`star-5`);
//       star5.style.setProperty("--red-color", "red");
//       sessionStorage.setItem("totalStars", 1);
//       break;

//     case 2:
//       var star1 = document.getElementById(`star-1`);
//       star1.style.setProperty("--red-color", "yellow");
//       var star2 = document.getElementById(`star-2`);
//       star2.style.setProperty("--red-color", "yellow");
//       var star3 = document.getElementById(`star-3`);
//       star3.style.setProperty("--red-color", "red");
//       var star4 = document.getElementById(`star-4`);
//       star4.style.setProperty("--red-color", "red");
//       var star5 = document.getElementById(`star-5`);
//       star5.style.setProperty("--red-color", "red");
//       sessionStorage.setItem("totalStars", 2);
//       break;

//     case 3:
//       var star1 = document.getElementById(`star-1`);
//       star1.style.setProperty("--red-color", "yellow");
//       var star2 = document.getElementById(`star-2`);
//       star2.style.setProperty("--red-color", "yellow");
//       var star3 = document.getElementById(`star-3`);
//       star3.style.setProperty("--red-color", "yellow");
//       var star4 = document.getElementById(`star-4`);
//       star4.style.setProperty("--red-color", "red");
//       var star5 = document.getElementById(`star-5`);
//       star5.style.setProperty("--red-color", "red");
//       sessionStorage.setItem("totalStars", 3);
//       break;

//     case 4:
//       var star1 = document.getElementById(`star-1`);
//       star1.style.setProperty("--red-color", "yellow");
//       var star2 = document.getElementById(`star-2`);
//       star2.style.setProperty("--red-color", "yellow");
//       var star3 = document.getElementById(`star-3`);
//       star3.style.setProperty("--red-color", "yellow");
//       var star4 = document.getElementById(`star-4`);
//       star4.style.setProperty("--red-color", "yellow");
//       var star5 = document.getElementById(`star-5`);
//       star5.style.setProperty("--red-color", "red");
//       sessionStorage.setItem("totalStars", 4);
//       break;

//     case 5:
//       var star1 = document.getElementById(`star-1`);
//       star1.style.setProperty("--red-color", "yellow");
//       var star2 = document.getElementById(`star-2`);
//       star2.style.setProperty("--red-color", "yellow");
//       var star3 = document.getElementById(`star-3`);
//       star3.style.setProperty("--red-color", "yellow");
//       var star4 = document.getElementById(`star-4`);
//       star4.style.setProperty("--red-color", "yellow");
//       var star5 = document.getElementById(`star-5`);
//       star5.style.setProperty("--red-color", "yellow");
//       sessionStorage.setItem("totalStars", 5);
//       break;
//   }
// }

function starSelected(selectedStar){
  for(let i = 1; i <= 5; i++){
    const star = document.getElementById(`star-${i}`);
    const color = i <= selectedStar ? 'yellow' : 'red';
    star.style.setProperty("--red-color", color);
  }
  sessionStorage.setItem("totalStars", selectedStar);
}
