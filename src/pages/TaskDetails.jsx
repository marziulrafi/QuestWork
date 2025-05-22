import React from 'react';
import { useLoaderData } from 'react-router';
import Loading from '../components/Loading';

const TaskDetails = () => {
    const task = useLoaderData();

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
                <div>
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default TaskDetails;