// SCROLL TO RIGHT
// Collect elements
let content = document.querySelector(".content")
let btnscrollright = document.querySelector(".btnscrollright")

btnscrollright.addEventListener("scroll",function(){
    window.scrollBy(1000,0)
})

// SCROLLABLE IMAGE GALLERY
// collect left and right buttons, and gallery container
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")
let gallerycontainer = document.querySelector(".gallerycontainer")

// define one function for scroll left and scroll right
function scrollgallery(scrollpixels){
    gallerycontainer.scrollBy({
        left:scrollpixels,
        behavior:"smooth"
    })
}

// add event to each button when is clicked
btnright.addEventListener("click",function(){
    scrollgallery(500)
})

btnleft.addEventListener("click",function(){
    scrollgallery(-500)
})

// TO TOP SCROLL
// collect to icon
let totop = document.querySelector(".totop")

// add scroll event to the window (internet browser)
window.addEventListener("scroll", function(){
    let pexelfromtop = this.window.scrollY // get the pexels when scroll down
    // test window.scrollY
    console.log(pexelfromtop)

    if(pexelsfromtop>300){
        totop.style.display = "block"
    }
    else{
        totop.style.display = "none"
    }
})