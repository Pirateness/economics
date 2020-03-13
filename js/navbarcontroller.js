const navigationBar = document.getElementById('navbar')

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
    if (scroll > 790){
        console.log(navigationBar)
        navigationBar.style.backgroundColor = '#333';
    } else{
        console.log(navigationBar)
        navigationBar.style.backgroundColor = 'transparent';
    }
});