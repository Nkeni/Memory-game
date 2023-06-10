let pic1 = document.getElementById("picture1");
let pic2 = document.getElementById("picture2");
let pic3 = document.getElementById("picture3");

setTimeout(function () {
  pic1.style.visibility = "hidden";
  pic2.style.visibility = "hidden";
  pic3.style.visibility = "hidden";
}, 1000);

const word = document.querySelectorAll(".word");
word.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

//! dragstart handler
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
  console.log("dragging");
}

/* drop targets */
const pictureContainer = document.querySelectorAll(".picture-container");

pictureContainer.forEach((container) => {
  container.addEventListener("dragenter", dragEnter);
  container.addEventListener("dragover", dragOver);
  container.addEventListener("dragleave", dragLeave);
  container.addEventListener("drop", drop);
});

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.target.classList.remove("drag-over");

  // get the draggable element
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  console.log("dragged word;", draggable.id);
  console.log("dropped target;", e.target.id);
  if (draggable.id == e.target.id) {
    e.target.classList.add("drag-over-correct");
    alert("Correct");
  } else {
    e.target.classList.add("drag-over-wrong");
    alert("Wrong,YOU LOST, try again");
    //! After loosing, show images for 1 second again
    pic1.style.visibility = "visible";
    pic2.style.visibility = "visible";
    pic3.style.visibility = "visible";

    //! Hide images after one second again
    setTimeout(function () {
      pic1.style.visibility = "hidden";
      pic2.style.visibility = "hidden";
      pic3.style.visibility = "hidden";
    }, 1000);
  }

  // display the draggable element
  draggable.classList.remove("hide");
}
