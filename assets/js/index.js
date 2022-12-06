// 햄버거 nav 보였다 안 보였다.
const togglenavBT = document.querySelector(".nav_toogleBT");
const navmenu = document.querySelector("#nav ul");

togglenavBT.addEventListener("click", () => {
  alert(1);
  navmenu.classList.toggle("active");
});

// 배너 위 텍스트 애니메이션
const p1 = document.querySelector(".p1");
const characters = p1.textContent.match(/[\w\W]/g); //텍스트를 가져오고 배열을 만듭니다.
p1.textContent = ""; //Empty the contents.

// 각 문자를 반복하여 새 스팬 요소로 머리글 요소 안으로 밀어 넣습니다.
characters.forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  p1.appendChild(span);
});

// 문자 카운트 변수를 만들고 setChar()라는 새로운 함수로 타이머를 설정합니다.
let char = 0;
let timer = setInterval(setChar, 70);

// 모든 문자가 렌더링될 때 간격을 중지하거나 문자 범위 클래스를 페이드로 설정합니다.
function setChar() {
  const spanChar = document.querySelectorAll("span")[char];
  spanChar.className = "fade";
  char++;
  char === characters.length && clearInterval(timer);
}
