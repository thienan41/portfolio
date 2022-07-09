document.getElementById("home-btn").addEventListener("click", function () {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("aboutus-btn").addEventListener("click", function () {
  document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("port-btn").addEventListener("click", function () {
  document.getElementById("product").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("angledown").addEventListener("click", function () {
  document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact-btn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("cardProduct");

  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
