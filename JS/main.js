import Cards from "./Cards.js";


const card = new Cards("allCards" /* ID where I want to append all cards */)

$.getJSON("./JS/data.json", data => {
    console.log(`data`, data)
    data.forEach(e => {
        const newCard = card.createCard(e);
        card.appendCard(newCard)
    })
});

// var scroll = 0;
// $(window).scroll(()=>{
//     let lastScroll = $(window).scrollTop();
//     console.log('lastScroll :>> ', lastScroll);
//     if(lastScroll > scroll){
//         console.log("DOWN");
//         // document.querySelector(".nav_name").style.transform = "translateY(-4rem)"
//         document.querySelector(".first_section_parent").style.top = "-100vh"
//     }
//     // if(lastScroll < scroll){
//     //     console.log("UP");
//     // }
//     if(lastScroll > 600){
//         document.querySelector(".nav_name").style.transform = "translateY(0)"
//         // translate(-4rem, -3rem);
//     }
//     else if(lastScroll < 600){
//         document.querySelector(".nav_name").style.transform = "translateY(-4rem)"
//     }
//     scroll = lastScroll
// })
var tick = 0;

function scrollWheel(e) {
    if (e.originalEvent.wheelDelta > 0) {
        tick -= 1
        onChangeTick(tick)


    }
    else {
        tick += 1
        onChangeTick(tick)
    }
}
$('body').on('mousewheel', scrollWheel)

function onChangeTick(tick) {
    if (tick == 0) {
        /* Moving first and second section back to its positon */
        document.querySelector(".first_section_parent").style.transform = "translateY(0)"
        document.querySelector(".second_section").style.transform = "translateY(0)"

        /* Moving name upward (out of screen) */
        document.querySelector(".nav_name").style.transform = "translateY(-4rem)"

        document.querySelector(".first_section_top_heading").style.transform = "translate(0)"
        document.querySelector(".first_section_top_heading").style.opacity = "1"


    }
    else if (tick == 1) {
        /* Moving first section up (out of screen) */
        document.querySelector(".first_section_parent").style.transform = "translateY(-100vh)"

        /* Moving second section in place of first section */
        document.querySelector(".second_section").style.transform = "translateY(-90vh)"

        /* Reseting nav_name positon to its original to display */
        /* Moving top heading for transition */
        document.querySelector(".first_section_top_heading").style.transform = "translate(-9vw, -24vh)"
        document.querySelector(".first_section_top_heading").style.opacity = "0"

        // document.querySelector(".nav_name").style.transform = "translateY(0)"
        setTimeout(() => {
            document.querySelector(".nav_name").style.opacity = "1"
        }, 1000);


    }
}

