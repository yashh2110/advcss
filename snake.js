window.addEventListener("mousemove",(e)=>{
    gsap.to(".curser",{
        x: e.clientX,
        y: e.clientY,
        stagger:0.007,
        
        
    })
})