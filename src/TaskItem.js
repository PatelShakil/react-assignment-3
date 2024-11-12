import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
    return (
        <div className={'task-item'} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
            <h3>{task.title}</h3>
            <p>{task.message}</p>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />
            <label>{task.completed ? 'Completed' : 'Not Completed'}</label>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
