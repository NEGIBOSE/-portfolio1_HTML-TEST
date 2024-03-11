window.onload = function () {
  var images = [
    "assets/images/picture1.png",
    "assets/images/picture2.png",
    "assets/images/picture3.png",
    // 他の画像パスを追加
  ];

  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];

  var img = document.getElementById("myImage");
  img.src = randomImage;
};
