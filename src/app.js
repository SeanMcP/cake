import bodyParser from "body-parser";
import express from "express";
import expressFileUpload from "express-fileupload";
import expressReactViews from "express-react-views";
import path from "path";

import { DOCS_DB } from "./db";

const app = express();
const port = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", expressReactViews.createEngine());

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, _, next) => {
  if (req.query.hasOwnProperty("action")) {
    req.isAction = true;
  }
  next();
});

let likes = 0;

app.get("/", (req, res) => {
  res.render("Home", { likes });
});

app.post("/login", (req, res) => {
  res.redirect("/account");
});

app.post("/like", (req, res) => {
  likes++;
  if (req.isAction) {
    return res.send({ data: { likes } });
  }
  res.redirect("back");
});

app.get("/account", (req, res) => {
  res.render("Account", { name: "Sean" });
});

app.get("/view/:id", (req, res) => {
  const document = DOCS_DB.query("id", req.params.id);
  res.render("ViewDocument", { document, params: req.params });
});

app.get("/document/:id", function (req, res) {
  const { blob, ...document } = DOCS_DB.query("id", req.params.id);
  const buffer = Buffer.from(blob, "base64");

  // TODO: cache
  res.writeHead(200, {
    "Content-Type": document.mimetype,
    "Content-Length": buffer.length,
  });

  res.end(buffer);
});

app.post("/upload", expressFileUpload(), (req, res) => {
  const {
    document: { data, ...rest },
  } = req.files;
  const id = new Date().getTime();

  DOCS_DB.set({ [id]: { id, ...rest, blob: data.toString("base64") } });

  res.redirect(`/view/${id}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
