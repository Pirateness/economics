const navigationBar = document.getElementById('slideshow')
const actualNavigationBar = document.getElementById('navbar')
const slideshowimage = document.getElementById('slideshowimage')
const slideshowimage2 = document.getElementById('slideshowimage2')
const heading = document.getElementById('heading')
const subheading = document.getElementById('subheading')
const headingimg = document.getElementById('headingimg')
const secondmountain = document.getElementById('secondmountain')

//388

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
    if (scroll > 500){
        if (scroll > 1850){
            actualNavigationBar.style.backgroundColor = '#333';
            let offset = -(scroll - 500);
            navigationBar.style.top = offset.toString() 
        } else{
            let offset = -(scroll - 500);
            navigationBar.style.top = offset.toString()
            actualNavigationBar.style.backgroundColor = 'transparent'; 
        }
    } else{
        console.log(navigationBar)
        navigationBar.style.top = '0'
        actualNavigationBar.style.backgroundColor = 'transparent';
    }
});

function oldif(){
    slideshowimage.style.position = 'relative'
    navigationBar.style.top = '60%'
    slideshowimage2.style.marginTop = '-66%'
    slideshowimage2.style.position = 'relative'
    heading.style.display = 'none'
    subheading.style.display = 'none'
    headingimg.style.display = 'none'
    //secondmountain.style.display = 'block'
    //navigationBar.style.display = 'none'
}

function oldElse(){
    slideshowimage.style.position = 'fixed'
    navigationBar.style.top = '0%'
    slideshowimage2.style.marginTop = '0%'
    slideshowimage2.style.position = 'fixed'
    heading.style.display = 'block'
    subheading.style.display = 'block'
    headingimg.style.display = 'block'
    //secondmountain.style.display = 'none'
    //navigationBar.style.display = 'block'
}