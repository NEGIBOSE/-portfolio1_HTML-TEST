window.onload = function () {
  var images = [
    "./assets/images/download(1).png",
    "./assets/images/download(2).png",
    "./assets/images/download(3).png",
    // 他の画像パスを追加
  ];

  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];

  var img = document.getElementById("myImage");
  img.src = randomImage;
};
