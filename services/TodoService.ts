const TodoModel = require("../models/Todo");

interface Todo {
  title: string;
  content: string;
}

exports.getAllTodos = async () => {
  return await TodoModel.find();
};

exports.createTodo = async (todo: Todo) => {
  return await TodoModel.create(todo);
};

exports.getTodoById = async (id: number) => {
  return await TodoModel.findById(id);
};

exports.updateTodo = async (id: number, todo: Todo) => {
  return await TodoModel.findByIdAndUpdate(id, todo);
};

exports.deleteTodo = async (id: number) => {
  return await TodoModel.findByIdAndDelete(id);
};
