import rango from "rango";
import TodoRoute from "./routes/TodoRoute";
import bodyParser from "body-parser";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = rango();
dotenv.config();

const database = process.env.MONGOLAB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err: any) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.add(TodoRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
