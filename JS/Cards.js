class Cards {
    constructor(divID /* Div ID where to append all the cards */ ) {
        this.divID = divID
    }
    
    getDescs(descs){
        let d = ""
        descs.forEach(e=>{
            d += "<p>" + e + " </p>"
        })
        console.log(`d`, d)
        return d
    }

    createCard(data) {
        let cardElement = document.createElement("div");
        const { title, descs, projectLink, githubLink, img, themeColor } = data

        

        let cardHTML = `
                        <div class="col my-3">
                            <div class="card border">
                                <div class="card_image">
                                    <img class="img-fluid" src="${img}" alt="" srcset="">
                                </div>
                                <div class="openContent">
                                    <div class="cardContent">
                                        <h2>${title}</h2>
                                        ${
                                            // this.getDescs(descs)
                                            descs.map(e=>{
                                                return "<p>" + e + " </p>"
                                            }).join('')
                                        }
                                        <div class="cardButtons">
                                            <button class="btn gitHubButton mx-2" onclick="window.open('${!githubLink ? "#" : githubLink}')" ${!githubLink ? "disabled='true'" : ""}>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                                                    alt="">
                                                <span class="mx-1">GitHub</span>
                                                <span class="forward mx-1"><i class="fas fa-arrow-circle-right"></i></span>
                                            </button>
                                            <button class="btn projectButton mx-1" style="background-color: ${themeColor ? themeColor : "transparent"};" onclick="window.open('${projectLink}')" ${!projectLink ? "disabled='true'" : ""}>
                                                <span>Project</span>
                                                <span class="forward mx-2"><i class="fas fa-arrow-circle-right"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
        cardElement.innerHTML = cardHTML

        return cardElement.firstElementChild
    }


    appendCard(card) {
        $(`#${this.divID}`).append(card)
    }
}


export default Cards