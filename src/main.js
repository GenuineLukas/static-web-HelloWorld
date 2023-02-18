let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = [
    "안녕하세요!",
    "Hello World",
    "	Hello Wêreld!",
    "مرحبا بالعالم!",
    "	你好世界！",
    "Hallo Welt!",
    "	नमस्कार संसार!"
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}
//한글자씩 택스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

//cursor blinking effect
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 700);
