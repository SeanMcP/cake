import React from "react";
import DefaultLayout from "./components/DefaultLayout";

export default function ViewDocument({ document, params }) {
  return (
    <DefaultLayout title={document.name}>
      <img src={"/document/" + params.id} alt={document.name} />
    </DefaultLayout>
  );
}
