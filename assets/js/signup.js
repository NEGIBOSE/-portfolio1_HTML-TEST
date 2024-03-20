document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // フォームのデータを取得
    const username = form.elements["username"].value;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;

    // バリデーションやサインアップ処理を行う
    // ここに処理を追加する
  });
});
