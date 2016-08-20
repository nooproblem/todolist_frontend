import { ADD_TODO, UPDATE_TODO, FETCH_TODOS, TOGGLE_ARCHIVE_TODO } from '../constants';
import moment from 'moment';

import TodoLogic from '../logic/todo_logic';

export function fetchTodos(archived, due, group) {
  return {
    type: FETCH_TODOS
  }
}

export function createTodo(subject, due) {
   const logic = new TodoLogic();
   let todo = logic.addTodo(subject, due)
   //const request = backend.addTodo(todo)

   return {
     type: ADD_TODO,
     payload: request,
     todo: todo
   }
}
export function toggleComplete(todo) {
  todo.completed = !todo.completed;
  return updateTodo(todo)
}

export function dueToday(todo) {
  const logic = new TodoLogic();
  todo.due = moment();
  todo = logic.updateTodo(todo);
  return updateTodo(todo)
}

export function dueTomorrow(todo) {
  const logic = new TodoLogic();
  todo.due = moment().add(1, "day")
  todo = logic.updateTodo(todo);
  return updateTodo(todo);
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    todo: todo
  }
}

export function toggleArchived(todo) {
  todo.archived = !todo.archived
  return {
    type: TOGGLE_ARCHIVE_TODO,
    todo: todo
  }
}

