var imageNo = 0;
var imageCaptions = [
  "Mountain SunRise",
  "Mountain Clouds",
  "Mountain Night",
  "Mountain Galaxy",
];
function moveForward() {
  if (this.imageNo + 1 < this.imageCaptions.length) {
    let image = document.getElementsByTagName("img")[0];
    // if we are taking images from local system
    if (this.startIndex == 0) {
      image.src = `mountain-${++this.imageNo}.jpg`;
    } else {
      // if we are taking images from API
      image.src = this.apiImages[++this.imageNo + this.startImage];
    }
    // do the changes when the image loads
    image.addEventListener("load", () => {
      document.getElementsByClassName("image-no")[0].innerHTML = `${
        this.imageNo + 1
      }/${this.imageCaptions.length}`;
      if (this.startIndex == 0) {
        document.getElementsByClassName("imageCaptions")[0].innerHTML =
          this.imageCaptions[this.imageNo];
      } else {
        document.getElementsByClassName("imageCaptions")[0].innerHTML =
          this.newImageCaption[this.imageNo + this.startImage];
      }
      this.makeOtherDefault(this.imageNo);
      image.className = "mountain-img";
      setTimeout(() => {
        image.classList.remove("mountain-img");
      }, 800);
    });
  }
}
function moveBackward() {
  if (this.imageNo > 0) {
    let image = document.getElementsByTagName("img")[0];
    // if we are taking images from local system
    if (this.startIndex == 0) {
      image.src = `mountain-${--this.imageNo}.jpg`;
    } else {
      // if we are taking images from API
      image.src = this.apiImages[--this.imageNo + this.startImage];
    }
    // do the changes when the image loads
    image.addEventListener("load", () => {
      document.getElementsByClassName("image-no")[0].innerHTML = `${
        this.imageNo + 1
      }/${this.imageCaptions.length}`;
      if (this.startIndex == 0) {
        document.getElementsByClassName("imageCaptions")[0].innerHTML =
          this.imageCaptions[this.imageNo];
      } else {
        document.getElementsByClassName("imageCaptions")[0].innerHTML =
          this.newImageCaption[this.imageNo + this.startImage];
      }
      this.makeOtherDefault(this.imageNo);
      image.className = "mountain-img";
      setTimeout(() => {
        image.classList.remove("mountain-img");
      }, 800);
    });
  }
}

// move to specific image on click of dots
function imageDotClicked(imageNo) {
  if (imageNo >= 0 && imageNo <= this.imageCaptions.length) {
    let image = document.getElementsByTagName("img")[0];
    // if we are taking images from local system
    if (this.startIndex == 0) {
      image.src = `mountain-${imageNo}.jpg`;
    } else {
      // if we are taking images from API
      image.src = this.apiImages[imageNo + this.startImage];
    }
    image.addEventListener("load", () => {
      document.getElementsByClassName("image-no")[0].innerHTML = `${
        imageNo + 1
      }/${this.imageCaptions.length}`;
      if (this.startIndex == 0) {
        document.getElementsByClassName("imageCaptions")[0].innerHTML =
          this.imageCaptions[this.imageNo];
      } else {
        document.getElementsByClassName("imageCaptions")[0].innerHTML =
          this.newImageCaption[this.imageNo + this.startImage];
      }
      this.makeOtherDefault(imageNo);
      image.className = "mountain-img";
      setTimeout(() => {
        image.classList.remove("mountain-img");
      }, 800);
    });
    this.imageNo = imageNo;
  }
}

// make dots colors as default
function makeOtherDefault(imageNo) {
  for (let i = 0; i < imageCaptions.length; i++) {
    document.getElementsByClassName("dots")[i].style.color = "#40E0D0";
  }
  document.getElementsByClassName("dots")[imageNo].style.color = "#008080";
}

// on refersh or load of browser
window.onload = () => {
  // for dots addition
  for (let i = 0; i < imageCaptions.length; i++) {
    if (i == 0) {
      // for first image
      let firstImage = document.getElementsByClassName("dots")[0];
      firstImage.style.color = "#008080";
      firstImage.addEventListener("click", () => {
        // move to specific image on click of dots
        imageDotClicked(i);
      });
    } else {
      let ele = document.createElement("i");
      ele.className = "dots fa fa-solid fa-circle";
      ele.setAttribute("title", `slide-${i + 1}`);
      ele.addEventListener("click", () => {
        imageDotClicked(i);
      });
      document.getElementsByClassName("image-dots")[0].appendChild(ele);
    }
  }
};

var movement =
  this.imageNo != this.imageCaptions.length - 1 ? "forward" : "backward";
var myInterval;
function startSlideShow(e) {
  if (e.target.innerHTML.trim() === "Start Slide Show") {
    e.target.innerHTML = "Stop Slide Show";
    this.myInterval = setInterval(() => {
      if (this.movement === "forward") {
        this.moveForward();
        if (this.imageNo == this.imageCaptions.length - 1) {
          this.movement = "backward";
        }
      } else if (this.movement === "backward") {
        this.moveBackward();
        if (this.imageNo == 0) {
          this.movement = "forward";
        }
      }
    }, 1000);
  } else {
    e.target.innerHTML = "Start Slide Show";
    clearInterval(this.myInterval);
  }
}

// callImageApi = () =>{
//   const response = fetch('https://picsum.photos/v2/list');
//   response.then((resp)=>{
//     resp.json().then((rep)=>{
//       console.log(rep);
//     });
//   })
// }

var apiData,
  apiImages = [],
  startImage = 0,
  startIndex = 0,
  endImage = 3,
  endIndex = 3;
getImages = async () => {
  // call api only once
  if (!this.apiData) {
    const response = await fetch("https://picsum.photos/v2/list");
    this.apiData = await response.json();
  }
  // show new images only till the no. of images present in API
  if (this.endIndex <= this.apiData.length - 1) {
    this.startImage = this.startIndex;
    this.endImage = this.endIndex;
    showOnSlideShow();
  }
};

var newImageCaption = [];

// show API fetched images in slide show
function showOnSlideShow() {
  for (let i = this.startIndex; i <= this.endIndex; i++) {
    this.apiImages.push(this.apiData[i].download_url);
    this.newImageCaption.push(`API Image-${i + 1}`);
  }
  document.getElementsByTagName("img")[0].src =
    this.apiData[this.imageNo + this.startIndex].download_url;
  document.getElementsByClassName("imageCaptions")[0].innerHTML =
    this.newImageCaption[this.imageNo + this.startImage];
  this.startIndex = this.endIndex + 1;
  this.endIndex = this.endIndex + 3 + 1;
}
