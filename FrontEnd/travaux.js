let wors = "";
let cats = "";
let docs = "";
let res = "";
/* async function fetchData(purl) {
        let response = await fetch(purl);
        if (!(response.ok)) {
            console.log("La réponse " + response.ok);
            throw new Error(`Fetch ${purl}`);
        } else {
            let res = await response.json();
            console.log(res);
            return res;
        };
}
 */
async function fetchData(purl) {
    let response = await fetch(purl);
    if (!(response.ok)) {res = "false";}
    else {res = await response.json();}
    console.log(res);
    if (res === "false") {
        throw new Error("Erreur dans fetchData");
    }
    return res;
}
function fetchAll() {
    try {
        console.log("Début fetchAll");
        let urls = `http://localhost:5678/api/works`
        wors = fetchData(urls);

        urls = `http://localhost:5678/api/categories`
        cats = fetchData(urls);

        //urls = `http://localhost:5678/api/docs`
        //docs = fetchData(urls);

        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
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
        return true;
    } catch (error) {
        console.log("Erreur createFigures " + error.message);
    }
}
function main() {
    let b = fetchAll();
    if (b === true) {console.log("fetchAll Ok");
            b = removeFigures()};
    if (b === true) {console.log("removeFigures Ok");
            b = createFigures()};
    if (b === true) {console.log("createFigures Ok")};
}
const wmax = wors.length - 1;
main();