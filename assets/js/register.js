// セッションストレージから画像のURLを取得
var selectedImageUrl = sessionStorage.getItem("selectedImageUrl");

// 画像を表示
var registerImage = document.getElementById("registerImage");
registerImage.src = selectedImageUrl;
