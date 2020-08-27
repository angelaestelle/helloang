/* CURSOR */

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 0) + "px; left: " + (e.pageX - 0) + "px;"
  );
});

document.addEventListener("click", (e) => {
  console.log(e.target);
  cursor.classList.add("click");

  setTimeout(() => {
    cursor.classList.remove("click");
  }, 500);
});

/* MODAL */

// create references to the modal...
var modal = document.getElementById("myModal");
// to all images -- note I'm using a class!
var images = document.getElementsByClassName("modalImg");
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
