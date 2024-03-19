// 選択された本の画像URLを保持する変数
let selectedImageUrl;

// 書籍を検索する関数
function searchBooks() {
  const searchTerm = document.getElementById("searchTerm").value;
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm; // Google Books APIを使用

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const results = data.items; // 検索結果を results 変数に設定する
      displayResults(results); // displayResults 関数を呼び出して結果を表示する
    })
    .catch((error) => console.error("Error:", error));
}

// 書籍の検索結果を表示する関数
function displayResults(results) {
  const container = document.getElementById("searchResults");
  container.innerHTML = ""; // 検索結果をクリア

  if (results && results.length > 0) {
    const ul = document.createElement("ul");
    for (let i = 0; i < results.length; i++) {
      const volumeInfo = results[i].volumeInfo;
      const title = volumeInfo.title;
      const authors = volumeInfo.authors
        ? volumeInfo.authors.join(", ")
        : "不明";
      const year = volumeInfo.publishedDate
        ? volumeInfo.publishedDate.substr(0, 4)
        : "不明";
      const thumbnail = volumeInfo.imageLinks
        ? volumeInfo.imageLinks.thumbnail
        : "";

      const li = document.createElement("li");
      li.style.display = "flex"; // リストアイテムをフレックスボックスに設定
      li.style.alignItems = "center"; // アイテムを中央に配置

      // サムネイル画像を表示
      const img = document.createElement("img");
      img.src = thumbnail;
      img.style.marginRight = "10px"; // 画像の右側に余白を設定
      li.appendChild(img);

      // タイトルと著者と年のテキストを追加
      const text = document.createTextNode(
        title + " /著 " + authors + " / " + year + "年"
      );
      li.appendChild(text);

      // クリックイベントのハンドラをラップしてthumbnailを渡す
      li.addEventListener("click", createClickHandler(thumbnail, title));

      ul.appendChild(li);
    }
    container.appendChild(ul);
  } else {
    container.innerHTML = "<p>No results found</p>";
  }
}

// クリックイベントのハンドラを作成する関数
function createClickHandler(thumbnail, title) {
  return function () {
    const selectedTitle = title; // タイトルを取得
    document.getElementById("searchTerm").value = selectedTitle;
    // 選択されたタイトルを検索ボックスに自動で入れる
    selectedImageUrl = thumbnail; // 選択された本の画像URLを保持する
    sessionStorage.setItem("selectedTitle", selectedTitle); // タイトルをセッションストレージに保存
    sessionStorage.setItem("selectedImageUrl", selectedImageUrl); // 画像URLをセッションストレージに保存
    // ページ遷移せずに画像URLをregister.htmlに表示させる
    const registerImage = document.getElementById("registerImage");
    registerImage.src = selectedImageUrl;
  };
}

// タブの作成
document.addEventListener("DOMContentLoaded", function () {
  // タブのリンクを取得
  var tabLinks = document.querySelectorAll(".tab-links li a");

  // タブのコンテンツを取得
  var tabContents = document.querySelectorAll(".tab-content");

  // タブリンクにイベントリスナーを追加
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function (event) {
      event.preventDefault(); // デフォルトのリンク動作を無効化

      // タブの表示を切り替える
      var targetTabId = this.getAttribute("href").substring(1);
      tabContents.forEach(function (tabContent) {
        if (tabContent.id === targetTabId) {
          tabContent.classList.add("active");
        } else {
          tabContent.classList.remove("active");
        }
      });

      // タブの選択状態を切り替える
      tabLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});

// カテゴリーを処理する関数
function processCategory(category) {
  switch (category) {
    case "magic":
      return "SFを選択しました";
    case "human":
      return "ノンフィクションを選択しました";
    case "love":
      return "ラブを選択しました";
    case "comedy":
      return "コメディを選択しました";
    case "horror":
      return "ホラーを選択しました";
    default:
      return "選択されませんでした";
  }
}

// ページの読み込みが完了したときに実行
document.addEventListener("DOMContentLoaded", function () {
  // カテゴリーアイコンの要素を取得
  var categoryIcons = document.querySelectorAll(".category-icon");

  // 各カテゴリーアイコンがクリックされたときのイベントリスナーを追加
  categoryIcons.forEach(function (icon) {
    icon.addEventListener("click", function (event) {
      // デフォルトの動作を無効化
      event.preventDefault();

      // 関連するカテゴリーを取得
      var category = this.getAttribute("data-category");

      // 対応するカテゴリーを処理する関数を呼び出し、結果をalertで表示する
      alert(processCategory(category));
    });
  });
});
