import { Context } from "rango";
const todoService = require("../services/TodoService");

const all = async (context: Context): Promise<any> => {
  try {
    const data = await todoService.getAllTodos();
    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
};

const view = async (context: Context): Promise<any> => {
  try {
    const userId = context.params.id;
    const data = await todoService.getTodoById(userId);
    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
};

const create = async (context: Context): Promise<any> => {
  try {
    const payload = context.body;
    const data = await todoService.createTodo(payload);
    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
};

const update = async (context: Context): Promise<any> => {
  try {
    const userId = context.params.id;
    const payload = context.body;
    const data = await todoService.updateTodo(userId, payload);
    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
};

const remove = async (context: Context): Promise<any> => {
  try {
    const userId = context.params.id;
    const data = await todoService.deleteTodo(userId);
    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
};

export default {
  all,
  view,
  create,
  update,
  remove,
};
