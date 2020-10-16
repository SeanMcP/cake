import React from "react";
import DefaultLayout from "./components/DefaultLayout";
import LoginForm from "./components/LoginForm";

export default function Home({ likes = 0 }) {
  return (
    <DefaultLayout title="Cake" scripts={["/js/like.js"]}>
      <div>
        <h1>Home</h1>
        <form action="/like" method="post" data-action="like">
          <button>
            Likes: <span data-like="count">{likes}</span>
          </button>
        </form>
        <LoginForm />
        <form action="/upload" method="post" encType="multipart/form-data">
          <label>
            <b style={{ display: "block" }}>Name</b>
            <input name="name" type="text" />
          </label>
          <label>
            <b style={{ display: "block" }}>Description</b>
            <textarea name="description"></textarea>
          </label>
          <label>
            <b style={{ display: "block" }}>Document</b>
            <input type="file" name="document" />
          </label>
          <button>Save</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    </DefaultLayout>
  );
}
