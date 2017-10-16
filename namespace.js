var WILL0684 = {
  init: function(){
    let div = document.createElement("div");
    div.classList.add("box");
    div.textContent = "WILL0684";
    let boxes = document.getElementById("boxes");
    boxes.appendChild(div);

    div.addEventListener("click", WILL0684.bbcolour);
    div.addEventListener("mouseover", WILL0684.hghlght);
    div.addEventListener("mouseout", WILL0684.hghlght);
  },
  bbcolour: function (ev){
    ev.target.style.backgroundColor = "blue";
    ev.target.style.borderColor = "orange";
  },
  hghlght: function (ev){
    ev.target.classList.toggle("highlight");
  }
};