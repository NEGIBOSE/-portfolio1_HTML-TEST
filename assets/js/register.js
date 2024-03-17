// セッションストレージから選択した本の画像の URL とタイトルを取得
var selectedImageUrl = sessionStorage.getItem("selectedImageUrl");
var selectedTitle = sessionStorage.getItem("selectedTitle");

// 画像を表示する要素のIDを取得し、選択した本の画像のURLを設定
var selectedImage = document.getElementById("selectedImage");
selectedImage.src = selectedImageUrl;

// タイトルを表示する要素のIDを取得し、選択した本のタイトルを設定
var titleElement = document.getElementById("selectedTitle");
titleElement.textContent = selectedTitle;
