let urls = "";
let response = "";
let wors = "";
let cats = "";
try {
    urls = `http://localhost:5678/api/works`
    let response = await fetch(urls);
    wors = await response.json();
    console.log(wors);

    urls = `http://localhost:5678/api/categories`
    response = await fetch(urls);
    cats = await response.json();
    console.log(cats);

} catch {
    console.log(`Erreur ${urls}`);
}

const wmax = wors.length - 1;
const figs = document.querySelector(".gallery");
figs.parentNode.removeChild(figs);
