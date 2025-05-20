import React, { useState } from 'react';
import { useParams } from 'react-router';

const TaskDetails = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);

    if (!task) {
        fetch(`http://localhost:3000/tasks/${id}`)
            .then(res => res.json())
            .then(data => setTask(data))
            .catch(err => console.error(err));
    }

    return (
        <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow rounded">
            {task ? (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Task Details</h2>
                    <p><strong>Title:</strong> {task.title}</p>
                    <p><strong>Category:</strong> {task.category}</p>
                    <p><strong>Description:</strong> {task.description}</p>
                    <p><strong>Deadline:</strong> {task.deadline}</p>
                    <p><strong>Budget:</strong> ${task.budget}</p>
                    <p><strong>Posted by:</strong> {task.username} ({task.email})</p>
                </div>
            ) : (
                <p>Loading task...</p>
            )}
        </div>
    );
};

export default TaskDetails;
