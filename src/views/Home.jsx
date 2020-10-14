import React from "react";

function LoginForm() {
  return (
    <form action="/login" method="post">
      <label>
        <b>Email</b>
        <input type="email" name="email" value="chuck@testa.com" />
      </label>
      <label>
        <b>Password</b>
        <input type="password" name="password" value="nope" />
      </label>
      <button>Login</button>
    </form>
  );
}

export default function Home({ likes = 0 }) {
  return (
    <div>
      <h1>Home</h1>
      <form action="/like" method="post" data-action="like">
        <button>Likes: <span data-like="count">{likes}</span></button>
      </form>
      <LoginForm />
      <script type="module" src="/js/like.js"></script>
    </div>
  );
}
