// セッションストレージから選択した本の画像の URL を取得
var selectedImageUrl = sessionStorage.getItem("selectedImageUrl");

// 画像を表示する要素のIDを取得し、選択した本の画像のURLを設定
var selectedImage = document.getElementById("selectedImage");
selectedImage.src = selectedImageUrl;

// アニメーションが終了した後に要素を非表示にする関数
function hideElementAfterAnimation() {
  var rotatingShrinkingImage = document.querySelector(
    ".rotating-shrinking-image"
  );
  rotatingShrinkingImage.style.visibility = "hidden"; // 要素を非表示にする
}

// アニメーションが終了したら要素を非表示にするイベントリスナーを追加
document.addEventListener("DOMContentLoaded", function () {
  var rotatingShrinkingImage = document.querySelector(
    ".rotating-shrinking-image"
  );
  rotatingShrinkingImage.addEventListener(
    "animationend",
    hideElementAfterAnimation
  );
});

// ページの読み込みが完了したときに実行
document.addEventListener("DOMContentLoaded", function () {
  // 5秒後にコメントを表示する
  setTimeout(function () {
    var commentElement = document.getElementById("comment");
    commentElement.style.display = "block"; // コメントを表示
  }, 4000); // 4000ミリ秒（4秒）後に実行
});

document.addEventListener("DOMContentLoaded", function () {
  // ランダムなコメントの配列
  const comments = [
    "うれしそうだ",
    "よろこんでいる",
    "はしゃいでいる",
    "こんな本があったなんて...",
    "す、すっげぇ",
  ];

  // ランダムなコメントを選択
  const randomIndex = Math.floor(Math.random() * comments.length);
  const randomComment = comments[randomIndex];

  // ランダムなコメントを表示
  document.getElementById("comment").textContent = randomComment;
});

// ページの読み込みが完了したときに実行
document.addEventListener("DOMContentLoaded", function () {
  // 7秒後にindex.htmlに遷移する関数
  function redirectToNextPage() {
    window.location.href = "index.html"; // 次のページへの遷移
  }

  // 7秒後にredirectToNextPage関数を実行
  setTimeout(redirectToNextPage, 7000); // ミリ秒単位で指定するため、7000ミリ秒＝7秒
});
