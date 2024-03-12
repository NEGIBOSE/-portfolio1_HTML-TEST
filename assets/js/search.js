// 本の検索
function searchBooks() {
  var searchTerm = document.getElementById("searchTerm").value;
  var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayResults(data.items))
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

      var li = document.createElement("li");
      li.textContent = title + " /著 " + authors + " / " + year + "年";

      // クリックしたタイトルを検索ボックスに自動入力する
      li.addEventListener("click", function () {
        document.getElementById("searchTerm").value =
          this.textContent.split(" 著 ")[0];
      });

      ul.appendChild(li);
    }
    container.appendChild(ul);
  } else {
    container.innerHTML = "<p>No results found</p>";
  }
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
