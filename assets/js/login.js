// ユーザー名とパスワードのデータベースの代わりに、仮のユーザー名とパスワードのリスト
const users = [
  { username: "negibose", password: "9999" },
  { username: "user2", password: "password2" },
  // 他のユーザー情報...
];

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // フォームのデータを取得
    const username = form.elements["username"].value;
    const password = form.elements["password"].value;

    // ユーザー名とパスワードの照合
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // ログインが成功した場合、index.htmlにリダイレクトする
      window.location.href = "index.html";
    } else {
      // ログインが失敗した場合の処理
      errorMessage.textContent =
        "ログインに失敗しました。ユーザー名またはパスワードが間違っています。";
    }
  });
});
