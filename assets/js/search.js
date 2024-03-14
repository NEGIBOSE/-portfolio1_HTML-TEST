var selectedImageUrl; // 選択された本の画像URLを保持する変数

function searchBooks() {
  var searchTerm = document.getElementById("searchTerm").value;
  var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm; // Google Books APIを使用

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      results = data.items; // 検索結果を results 変数に設定する
      displayResults(results); // displayResults 関数を呼び出して結果を表示する
    })
    .catch((error) => console.error("Error:", error));
}

function displayResults(results) {
  var container = document.getElementById("searchResults");
  container.innerHTML = ""; // 検索結果をクリア

  if (results && results.length > 0) {
    var ul = document.createElement("ul");
    for (var i = 0; i < results.length; i++) {
      var volumeInfo = results[i].volumeInfo;
      var title = volumeInfo.title;
      var authors = volumeInfo.authors ? volumeInfo.authors.join(", ") : "不明";
      var year = volumeInfo.publishedDate
        ? volumeInfo.publishedDate.substr(0, 4)
        : "不明";
      var thumbnail = volumeInfo.imageLinks
        ? volumeInfo.imageLinks.thumbnail
        : "";

      var li = document.createElement("li");
      li.textContent = title + " /著 " + authors + " / " + year + "年";

      // サムネイル画像を表示
      var img = document.createElement("img");
      img.src = thumbnail;
      li.appendChild(img);

      // クリックイベントのハンドラをラップしてthumbnailを渡す
      li.addEventListener("click", createClickHandler(thumbnail));

      ul.appendChild(li);
    }
    container.appendChild(ul);
  } else {
    container.innerHTML = "<p>No results found</p>";
  }
}

// クリックイベントのハンドラを作成する関数
function createClickHandler(thumbnail) {
  return function () {
    var selectedTitle = this.textContent.split(" /")[0];
    document.getElementById("searchTerm").value = selectedTitle;
    // 選択されたタイトルを検索ボックスに自動で入れる
    selectedImageUrl = thumbnail; // 選択された本の画像URLを保持する
    sessionStorage.setItem("selectedImageUrl", selectedImageUrl); // 画像URLをセッションストレージに保存
    // ページ遷移せずに画像URLをregister.htmlに表示させる
    var registerImage = document.getElementById("registerImage");
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
