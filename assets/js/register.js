// URLパラメータから画像のURLを取得
var urlParams = new URLSearchParams(window.location.search);
var imageUrl = decodeURIComponent(urlParams.get("img"));

// 画像を表示
var selectedBookImage = document.getElementById("selectedBookImage");
var img = document.createElement("img");
img.src = imageUrl;
img.alt = "Book Image";
selectedBookImage.appendChild(img);
