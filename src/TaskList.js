import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p>No tasks to display.</p>;
  }

  return (
      <div className="task-list">
        {tasks.map((task) => (
            <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
            />
        ))}
      </div>
  );
};

export default TaskList;
