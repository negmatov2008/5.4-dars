const btns = document.querySelectorAll(".game button");
const pen = document.querySelector(".pen");
const car = document.querySelector(".car");

let urin = 0;
let newWord = [];
let words = ["book", "pen", "car", "ruller", "bus"];
function game() {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      urin++;
      btn.classList = "true";
      btns.forEach((newBtn) => {
        newBtn.addEventListener("click", () => {
          if (2 > 1) {
            if (newBtn.textContent == words[0]) {
              words.shift();
              btn.classList = "hidden";
              newBtn.classList = "hidden";
              newWord.push(btn.classList);
              newWord.push(newBtn.classList);
              game();
              console.log(btn);
            } else {
              btn.classList = "false";
              newBtn.classList = "false";
              if (urin == 47 || urin == 369) {
                pen.classList = "hidden";
                car.classList = "hidden";
              }

              if (
                newWord.forEach((el) => {
                  if (btn.classList == el || newBtn.classList == el) {
                    btn.classList = "hidden";
                    newBtn.classList = "hidden";
                    game();
                  }
                })
              ) {
              }
              game();
            }
          } else {
            alert("urinish soni tugadi");
          }
        });
      });
    });
  });
  console.log(urin);
}
game();
