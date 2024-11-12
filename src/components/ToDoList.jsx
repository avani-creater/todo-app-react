import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
