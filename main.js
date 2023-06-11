let pic1 = document.getElementById("picture1");
let pic2 = document.getElementById("picture2");
let pic3 = document.getElementById("picture3");
let pic4 = document.getElementById("picture4");
let pic5 = document.getElementById("picture5");
let pic6 = document.getElementById("picture6");

setTimeout(function () {
  pic1.style.visibility = "hidden";
  pic2.style.visibility = "hidden";
  pic3.style.visibility = "hidden";
  pic4.style.visibility = "hidden";
  pic5.style.visibility = "hidden";
  pic6.style.visibility = "hidden";
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

//! drop targets
let pictureContainer = document.querySelectorAll(".picture-container");
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

  //! Get the draggable element
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  console.log("dragged word;", draggable.id);
  console.log("dropped target;", e.target.id);
  if (draggable.id == e.target.id) {
    e.target.classList.add("drag-over-correct");
  } else {
    e.target.classList.add("drag-over-wrong");
  }
  //! condition to check if all matches are correct

  if (
    pictureContainer[0].classList.value.includes("drag-over-correct") &&
    pictureContainer[1].classList.value.includes("drag-over-correct") &&
    pictureContainer[2].classList.value.includes("drag-over-correct") &&
    pictureContainer[3].classList.value.includes("drag-over-correct") &&
    pictureContainer[4].classList.value.includes("drag-over-correct") &&
    pictureContainer[5].classList.value.includes("drag-over-correct")
  ) {
    alert("Congratulations, You have WON!!!");
    pictureContainer[0].classList.add("drag-over-win");
    pictureContainer[1].classList.add("drag-over-win");
    pictureContainer[2].classList.add("drag-over-win");
    pictureContainer[3].classList.add("drag-over-win");
    pictureContainer[4].classList.add("drag-over-win");
    pictureContainer[5].classList.add("drag-over-win");

    //! remove the win sign after 1 second
    setTimeout(function () {
      pictureContainer[0].classList.remove("drag-over-win");
      pictureContainer[1].classList.remove("drag-over-win");
      pictureContainer[2].classList.remove("drag-over-win");
      pictureContainer[3].classList.remove("drag-over-win");
      pictureContainer[4].classList.remove("drag-over-win");
      pictureContainer[5].classList.remove("drag-over-win");
      pictureContainer[0].classList.remove("drag-over-correct");
      pictureContainer[1].classList.remove("drag-over-correct");
      pictureContainer[2].classList.remove("drag-over-correct");
      pictureContainer[3].classList.remove("drag-over-correct");
      pictureContainer[4].classList.remove("drag-over-correct");
      pictureContainer[5].classList.remove("drag-over-correct");
    }, 1000);
  } else if (
    pictureContainer[0].classList.value.includes("drag-over-wrong") ||
    pictureContainer[1].classList.value.includes("drag-over-wrong") ||
    pictureContainer[2].classList.value.includes("drag-over-wrong") ||
    pictureContainer[3].classList.value.includes("drag-over-wrong") ||
    pictureContainer[4].classList.value.includes("drag-over-wrong") ||
    pictureContainer[5].classList.value.includes("drag-over-wrong")
  ) {
    e.target.classList.add("drag-over-wrong");
    alert("Sorry, You have LOST...try again!!!");

    //! After loosing, show images for 1 second again
    pic1.style.visibility = "visible";
    pic2.style.visibility = "visible";
    pic3.style.visibility = "visible";
    pic4.style.visibility = "visible";
    pic5.style.visibility = "visible";
    pic6.style.visibility = "visible";

    //! Hide images after one second again
    setTimeout(function () {
      pic1.style.visibility = "hidden";
      pic2.style.visibility = "hidden";
      pic3.style.visibility = "hidden";
      pic4.style.visibility = "hidden";
      pic5.style.visibility = "hidden";
      pic6.style.visibility = "hidden";
    }, 1000);
    //! remove the wrong sign after 2 second
    setTimeout(function () {
      e.target.classList.remove("drag-over-wrong");
    }, 2000);
  }

  // display the draggable element
  draggable.classList.remove("hide");
}
