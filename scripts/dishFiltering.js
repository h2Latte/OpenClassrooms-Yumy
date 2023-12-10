const filtersBtn = document.querySelectorAll(".menu__wrapper--filterbar button");
const menuList = document.querySelectorAll(".menu__wrapper--choice ul");
const filtersBtnArr = Array.from(filtersBtn);

function showMenu(e) {
    menuList.forEach(menu => {
        menu.classList.add("invisible");
    });
    let target = filtersBtnArr.indexOf(e.currentTarget)
    menuList[target].classList.remove("invisible");
}

filtersBtn.forEach(button =>
    button.addEventListener("click", (e) => showMenu(e))
)

