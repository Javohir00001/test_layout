let menuLink = document.querySelectorAll(".menu__link");
menuLink.forEach(item => {
    let countClick = 0;
    item.addEventListener("click", () => {
        menuLink.forEach(i => {
            i.classList.remove('active')
        })
        countClick++
        if (countClick%2 == 0) {
            item.classList.remove('active')
        } else {
            item.classList.add('active')
        }
    }); 
});