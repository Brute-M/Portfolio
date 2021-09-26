import Cards from "./Cards.js";


const card = new Cards("allCards" /* ID where I want to append all cards */ )

$.getJSON("./JS/data.json", data => {
    console.log(`data`, data)
    data.forEach(e => {
        const newCard = card.createCard(e);
        card.appendCard(newCard)
    })
});

var scroll = 0;
$(window).scroll(()=>{
    let lastScroll = $(window).scrollTop();
    console.log('lastScroll :>> ', lastScroll);
    // if(lastScroll > scroll){
    //     console.log("DOWN");
    //     document.querySelector(".nav_name").style.transform = "translateY(-4rem)"
    // }
    // if(lastScroll < scroll){
    //     console.log("UP");
    //     document.querySelector(".nav_name").style.transform = "translateY(0)"

    // }
    if(lastScroll > 600){
        document.querySelector(".nav_name").style.transform = "translateY(0)"
        // translate(-4rem, -3rem);
    }
    else if(lastScroll < 600){
        document.querySelector(".nav_name").style.transform = "translateY(-4rem)"
    }
    scroll = lastScroll
})

