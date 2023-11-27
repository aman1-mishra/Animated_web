var tl = gsap.timeline();

tl.
   from("#eat",{
    opacity:0,
    scale:1.3,
    duration:1,
})
.from(".page1 h2", {
    opacity:0,
    y:5,
})
.from(".page1 p",{
    opacity:0,
    y:5,
})


var cr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x+"px"
    cr.style.top = dets.y+"px"
    blur.style.left = dets.x - 250 +"px"
    blur.style.top = dets.y - 250 +"px"
})

gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:true,
        start:"top -20%",
        end:"top -20%",
        scrub:5
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        marker:"true",
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})