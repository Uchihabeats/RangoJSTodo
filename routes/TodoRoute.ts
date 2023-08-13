import { Context } from "rango"
import todoController from "../controllers/todoController"

export default {
    path: "todo",
    GET: (context: Context) => todoController.all(context),
    POST: (context: Context) => todoController.create(context),
    children: [
        {
          path: ":id",
          GET: (context: Context) => todoController.view(context),
          PUT: (context: Context) => todoController.update(context),
          DELETE: (context: Context) => todoController.remove(context),
        }
      ],
}