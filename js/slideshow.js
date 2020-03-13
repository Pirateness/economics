let slides = ["imgs/slideshow1.jpg", "imgs/slideshow2.jpg"]
let slide = 0

function nextSlide(){
    slide++
    if (slide > 1){
        slide = 0
    }
    document.getElementById("slideshowimage").src=slides[slide]
}

function previousSlide(){
    slide--
    if (slide < 0){
        slide = 1
    }
    document.getElementById("slideshowimage").src=slides[slide]
}