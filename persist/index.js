const todo_db = {};

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const addTodo = function (todo) {
  id = makeid(8);
  todo.id = id;
  todo_db[id] = todo;
  console.log(todo_db);
  return todo;
};

const getTodo = function (id) {
  return todo_db[id];
};

const getTodos = function () {
  return todo_db;
};

module.exports = {
  addTodo: addTodo,
  getTodo: getTodo,
  getTodos: getTodos,
};
