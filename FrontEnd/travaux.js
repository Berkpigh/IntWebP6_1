const por = document.getElementById("portfolio");
let gal = document.querySelector(".gallery");
let wors = "";
let cats = "";
let docs = "";
let wmax = 0;
let cmax = 0;

let urls = `http://localhost:5678/api/works`
let response = await fetch(urls);
wors = await response.json();
wmax = wors.length -1;

urls = `http://localhost:5678/api/categories`
response = await fetch(urls);
cats = await response.json();
cmax = cats.length -1;

function removeFigures() {
    try {
        console.log("Début removeFigures");
        let figs = document.querySelector(".gallery");
        figs.parentNode.removeChild(figs);
        return true;
    } catch (error) {
        console.log("Erreur removeFigures " + error.message);
    }
}
function createFigures()  {
    try {
        console.log("Début createFigures");
        gal = document.createElement("div");
        gal.classList.add("gallery");
        for (let w = 0; w <= wmax; w++) {
            let fig = document.createElement("figure");
            let ima = document.createElement("img");
            let fic = document.createElement("figcaption");
            ima.src = wors[w].imageUrl;
            ima.alt = wors[w].title;
            fic.innerHTML  = wors[w].title;
            fig.appendChild(ima);
            fig.appendChild(fic);
            gal.appendChild(fig);
            //console.log(gal);
        }
        por.appendChild(gal);
        console.log(por);
        return true;
    } catch (error) {
        console.log("Erreur createFigures " + error.message);
    }
}
function main() {
    let b = removeFigures();
    if (b === true) {console.log("removeFigures Ok");
                     b = createFigures()};
    if (b === true) {console.log("createFigures Ok")};
}

main();