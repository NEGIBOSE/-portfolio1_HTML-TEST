// セッションストレージから選択した本の画像の URL を取得
var selectedImageUrl = sessionStorage.getItem("selectedImageUrl");

// 画像を表示する要素のIDを取得し、選択した本の画像のURLを設定
var selectedImage = document.getElementById("selectedImage");
selectedImage.src = selectedImageUrl;

// ページの読み込みが完了したときに実行
document.addEventListener("DOMContentLoaded", function () {
  // 5秒後にコメントを表示する
  setTimeout(function () {
    var commentElement = document.getElementById("comment");
    commentElement.style.display = "block"; // コメントを表示
  }, 5000); // 5000ミリ秒（5秒）後に実行
});
