let content = document.getElementsByTagName("main")[0];
content.style.visibility = "hidden";

let sidebar = document.getElementsByClassName("sidebar")[0];

let lowerLayerBurger = document.getElementsByClassName("menu-toggler__line")[2];
lowerLayerBurger.addEventListener("animationend", function(evt) {
  content.style.visibility = "visible";
});

document.getElementsByTagName("ul")[0].addEventListener("click", function(evt) {
  document.getElementById("menuToggler").checked = false;

  function handleTransitionEnd(transitionEvent) {
    let contentDivs = document.querySelectorAll("main div");
    for (let i = 0; i < contentDivs.length; i++) {
      contentDivs[i].style.display = "none";
    }

    let contentId = evt.srcElement.hash;
    let contentDiv = document.getElementById(contentId.substr(1));
    contentDiv.style.display = "inherit";
    
    sidebar.removeEventListener("transitionend", handleTransitionEnd);
  }
  
  sidebar.addEventListener("transitionend", handleTransitionEnd);
});
