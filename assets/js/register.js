// セッションストレージから選択した本の画像の URL とタイトルを取得
var selectedImageUrl = sessionStorage.getItem("selectedImageUrl");
var selectedTitle = sessionStorage.getItem("selectedTitle");

// 画像を表示する要素のIDを取得し、選択した本の画像のURLを設定
var selectedImage = document.getElementById("selectedImage");
selectedImage.src = selectedImageUrl;

// タイトルを表示する要素のIDを取得し、選択した本のタイトルを設定
var titleElement = document.getElementById("selectedTitle");
titleElement.textContent = selectedTitle;

document.addEventListener("DOMContentLoaded", function () {
  // セッションストレージから選択したアイコンを取得
  var selectedIcon = sessionStorage.getItem("selectedIcon");
  if (selectedIcon) {
    // アイコンを表示する要素を取得
    var iconContainer = document.getElementById("selectedIconContainer");
    console.log(iconContainer); // iconContainerが正しく取得されていることを確認

    // セッションストレージから保存されたSVGの内容を取得して表示する
    iconContainer.innerHTML = selectedIcon;
  }
});
