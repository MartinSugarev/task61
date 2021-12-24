import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let content = document.querySelectorAll("p.subtitle.is-6.price.hot"); 
         for(let i = 0; i < content.length; i++){
          let price = content[i].innerHTML;
          content[i].innerHTML = price + ' ' + '&#128293'
         }
});


