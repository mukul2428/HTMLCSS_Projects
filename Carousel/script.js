var imageNo = 1;
var captions = [
  "Mountain SunRise",
  "Mountain Clouds",
  "Mountain Night",
  "Mountain Galaxy",
];
function moveForward() {
  if (this.imageNo < this.captions.length) {
    let image = document.getElementsByTagName("img")[0];
    image.src = `mountain-${++this.imageNo}.jpg`;
    image.addEventListener("load", () => {
      document.getElementsByClassName(
        "image-no"
      )[0].innerHTML = `${this.imageNo}/${this.captions.length}`;
      document.getElementsByClassName("captions")[0].innerHTML =
        this.captions[this.imageNo - 1];
      this.makeOtherDefault(this.imageNo);
      image.className = "mountain-img";
      setTimeout(() => {
        image.classList.remove("mountain-img");
      }, 800);
    });
  }
}
function moveBackward() {
  if (this.imageNo > 1) {
    let image = document.getElementsByTagName("img")[0];
    image.src = `mountain-${--this.imageNo}.jpg`;
    image.addEventListener("load", () => {
      document.getElementsByClassName(
        "image-no"
      )[0].innerHTML = `${this.imageNo}/${this.captions.length}`;
      document.getElementsByClassName("captions")[0].innerHTML =
        this.captions[this.imageNo - 1];
      this.makeOtherDefault(this.imageNo);
      image.className = "mountain-img";
      setTimeout(() => {
        image.classList.remove("mountain-img");
      }, 800);
    });
  }
}

function imageClicked(imageNo) {
  if (imageNo >= 1 && imageNo <= this.captions.length) {
    let image = document.getElementsByTagName("img")[0];
    image.src = `mountain-${imageNo}.jpg`;
    image.addEventListener("load", () => {
      document.getElementsByClassName(
        "image-no"
      )[0].innerHTML = `${imageNo}/${this.captions.length}`;
      document.getElementsByClassName("captions")[0].innerHTML =
        this.captions[imageNo - 1];
      this.makeOtherDefault(imageNo);
      image.className = "mountain-img";
      setTimeout(() => {
        image.classList.remove("mountain-img");
      }, 800);
    });
    this.imageNo = imageNo;
  }
}

function makeOtherDefault(imageNo) {
  for (let i = 0; i < captions.length; i++) {
    document.getElementsByClassName("dots")[i].style.color = "#40E0D0";
  }
  document.getElementsByClassName("dots")[imageNo - 1].style.color = "#008080";
}

window.onload = () => {
  for (let i = 1; i <= captions.length; i++) {
    if (i == 1) {
      let firstImage = document.getElementsByClassName("dots")[0];
      firstImage.style.color = "#008080";
      firstImage.addEventListener("click", () => {
        imageClicked(i);
      });
    } else {
      let ele = document.createElement("i");
      ele.className = "dots fa fa-solid fa-circle";
      ele.setAttribute("title", `slide-${i}`);
      ele.addEventListener("click", () => {
        imageClicked(i);
      });
      document.getElementsByClassName("image-dots")[0].appendChild(ele);
    }
  }
};

// callImageApi = () =>{
//   const response = fetch('https://picsum.photos/v2/list');
//   response.then((resp)=>{
//     resp.json().then((rep)=>{
//       console.log(rep);
//     });
//   })
// }

var apiData, start = 0, end = 9;
getImages = async () =>{
    const response = await fetch('https://picsum.photos/v2/list');
    const data = await response.json();
    const start = this.start;
    const end = this.end;
}

var movement = this.imageNo != this.captions.length ? "forward" : "backward";
var myInterval;
function startSlideShow(e) {
  if (e.target.innerHTML === "Start Slide Show") {
    e.target.innerHTML = "Stop Slide Show";
    this.myInterval = setInterval(() => {
      if (this.movement === "forward") {
        this.moveForward();
        if (this.imageNo == this.captions.length) {
          this.movement = "backward";
        }
      } else if (this.movement === "backward") {
        this.moveBackward();
        if (this.imageNo == 1) {
          this.movement = "forward";
        }
      }
    }, 1000);
  } else {
    e.target.innerHTML = "Start Slide Show";
    clearInterval(this.myInterval);
  }
}
