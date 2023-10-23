gsap.from("#nav img, #nav h3, #nav button, #nav h4", {
    y: -100, 
    duration: 1, 
    delay: 0.5,
    opacity: 0,
    stagger: 0.2
})

let tl = gsap.timeline()

tl.from("#main h1", {
    y: 100,
    opacity: 0,
    stagger: 0.5
})

tl.from("#main #left_img", {
    x: -100,
    opacity: 0
})

tl.from("#main #right_img", {
    x: 100,
    opacity: 0
})

tl.from("h5", {
    scale: 0,
    opacity: 0
})

tl.to("h5", {
    y: 30,
    repeat: -1,
    yoyo: true,
    duration: 0.7
})