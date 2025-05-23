import React, { use } from 'react';
import { useNavigate, useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';


const UpdateTask = () => {
    const { user } = use(AuthContext);
    const { _id, title, category, description, deadline, budget } = useLoaderData();

    const navigate = useNavigate();

    const handleUpdateTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries());

        fetch(`https://quest-work-server.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Success!', 'Task updated successfully.', 'success');
                    navigate('/my-tasks');
                } else {
                    Swal.fire('Info', 'No changes were made to the task.', 'info');
                }
            })
            .catch(error => {
                console.error("Error updating task:", error);
                Swal.fire('Error', 'Failed to update task.', 'error');
            });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Update Task</h2>
            <form onSubmit={handleUpdateTask} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    placeholder="Task Title"
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Category"
                    className="input input-bordered w-full"
                    required
                />
                <textarea
                    name="description"
                    defaultValue={description}
                    placeholder="Task Description"
                    className="textarea textarea-bordered w-full"
                    required
                />
                <input
                    type="date"
                    name="deadline"
                    defaultValue={deadline}
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="number"
                    name="budget"
                    defaultValue={budget}
                    placeholder="Budget"
                    className="input input-bordered w-full"
                    required
                />
                <input type="email" value={user?.email || ''} readOnly className="input input-bordered w-full bg-gray-100" />
                <input type="text" value={user?.displayName || ''} readOnly className="input input-bordered w-full bg-gray-100" />
                <button type="submit" className="btn btn-primary w-full">Update Task</button>
            </form>
        </div>
    );
};

export default UpdateTask;