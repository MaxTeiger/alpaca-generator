let bckImgPath = "img/backgrounds/"
let backgroundImages = {
  "Blue 50": "blue50.png",
  "Blue 60": "blue60.png",
  "Blue 70": "blue70.png",
  "Dark Blue 30": "darkblue30.png",
  "Dark Blue 50": "darkblue50.png",
  "Dark Blue 70": "darkblue70.png",

  "Green 50": "green50.png",
  "Green 60": "green60.png",
  "Green 70": "green70.png",

  "Grey 40": "grey40.png",
  "Grey 70": "grey70.png",
  "Grey 80": "grey80.png",

  "Red 50": "red50.png",
  "Red 60": "red60.png",
  "Red 70": "red70.png",

  "Yellow 50": "yellow50.png",
  "Yellow 60": "yellow60.png",
  "Yellow 70": "yellow70.png",
}

// Attributes Buttons
let backgroundButton = document.querySelector('#btn_background');
let earsButton = document.querySelector('#btn_ears');
let accessoriesButton = document.querySelector('#btn_accessories');
let eyesButton = document.querySelector('#btn_eyes');
let hairButton = document.querySelector('#btn_hair');
let legButton = document.querySelector('#btn_leg');
let mouthButton = document.querySelector('#btn_mouth');
let neckButton = document.querySelector('#btn_neck');

// Images layers
let bckImage = document.querySelector('#Layer1')
let neckImage = document.querySelector('#Layer2')
let noseImage = document.querySelector('#Layer3')
let mouthImage = document.querySelector('#Layer4')
let legImage = document.querySelector('#Layer5')
let eyesImage = document.querySelector('#Layer6')
let earsImage = document.querySelector('#Layer7')
let hairImage = document.querySelector('#Layer8')
let accessoriesImage = document.querySelector('#Layer9')

backgroundButton.onclick = function() {
    let mySrc = bckImage.getAttribute('src');
    if(mySrc === 'img/backgrounds/blue50.png') {
      bckImage.setAttribute('src','img/backgrounds/blue50.png');
    } else {
      bckImage.setAttribute('src','img/backgrounds/blue50.png');
    }
}
