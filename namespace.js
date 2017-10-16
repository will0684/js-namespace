var WILL0684 = {
  init: function(){
    console.log("script in WILL0684 called");
    let div = document.createElement("div");
    div.classList.add("box");
    let text = document.createTextNode("will0684");
    div.appendChild(text);
    let boxes = document.getElementsByClassName("boxes");
    boxes.appendChild(div);

    div.addEventListener("click", bbcolour);
    div.addEventListener("mouseover", hghlght);
    div.addEventListener("mouseout", hghlght);

    function bbcolour(ev){
      ev.target.style.backgroundColor = "blue";
      ev.target.style.BorderColor = "orange";
    }
    function hghlght(ev){
      ev.target.classList.toggle("highlight");
    }
  }
}