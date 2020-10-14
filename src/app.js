import bodyParser from "body-parser";
import express from "express";
import expressReactViews from "express-react-views";
import path from "path";

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

app.post("/like-action", (req, res) => {
  likes++;
  res.send({ data: { likes } });
});

app.get("/account", (req, res) => {
  res.render("Account", { name: "Sean" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
