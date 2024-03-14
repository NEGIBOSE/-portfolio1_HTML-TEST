window.onload = function () {
  var images = [
    "assets/images/picture1.png",
    "assets/images/picture2.png",
    "assets/images/picture3.png",
    "assets/images/picture4.png",
    "assets/images/picture5.png",
    "assets/images/picture6.png",
    "assets/images/picture7.png",
    "assets/images/picture8.png",
    "assets/images/picture9.png",
  ];

  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];

  var img = document.getElementById("myImage");
  img.src = randomImage;
};
