import React from "react";
import DefaultLayout from "./components/DefaultLayout";
import LoginForm from "./components/LoginForm";

export default function Home({ likes = 0 }) {
  return (
    <DefaultLayout title="Cake" scripts={['/js/like.js']}>
      <div>
        <h1>Home</h1>
        <form action="/like" method="post" data-action="like">
          <button>Likes: <span data-like="count">{likes}</span></button>
        </form>
        <LoginForm />
      </div>
    </DefaultLayout>
  );
}
