
//  Zalo:0788046135
//      Facebook:https://www.facebook.com/uh.its.vizky/
//      vui lòng không xóa dòng này nếu bạn còn là con người `(*>﹏<*)′ 

"use strict";

var titleElement = document.querySelector(".title");
var buttonsContainer = document.querySelector(".buttons");
var yesButton = document.querySelector(".btn--yes");
var noButton = document.querySelector(".btn--no");
var catImg = document.querySelector(".cat-img");

var MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    var imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});
function playAudio() {
    var audio = document.getElementById("myAudio");
  
    audio.play();
  }
function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  playAudio();
}

function resizeYesButton() {
  var computedStyle = window.getComputedStyle(yesButton);
  var fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  var newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  var messages = [
    "Không pé ui :(",
    "Tin juan chua chi?",
    "Đồng ý i mò",
    "Cảm thấy tỗn thương",
    "Tắt đền o(TヘTo)",
    "I'm gonna cry,duma tồi quớ 😿",
  ];
  var messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
//  Zalo:0788046135
// Facebook:https://www.facebook.com/uh.its.vizky/
// vui lòng không xóa dòng này nếu bạn còn là con người `(*>﹏<*)′ 