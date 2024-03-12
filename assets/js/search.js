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
