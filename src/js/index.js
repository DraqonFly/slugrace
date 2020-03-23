import "../scss/index.scss";

window.panelClick = (panelName) => {
    ["Race", "Slug", "Bet"].forEach( value => value !== panelName 
        ? document.getElementsByClassName("Panel__"+value)[0].classList.remove("--shown") 
        : document.getElementsByClassName("Panel__"+panelName)[0].classList.toggle("--shown") );  
}