import React from "react";

export default function LoginForm() {
  return (
    <form action="/login" method="post">
      <label>
        <b>Email</b>
        <input type="email" name="email" />
      </label>
      <label>
        <b>Password</b>
        <input type="password" name="password" />
      </label>
      <button>Login</button>
    </form>
  );
}
