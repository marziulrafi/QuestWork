import React, { use, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';


const UpdateTask = () => {
    const { user } = use(AuthContext);
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const navigate = useNavigate();

    if (!task) {
        fetch(`http://localhost:3000/tasks/${id}`)
            .then(res => res.json())
            .then(data => setTask(data))
            .catch(err => console.error(err));
    }

    const handleUpdateTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries());


    };

    return (
        <div className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Update Task</h2>
            {task ? (
                <form onSubmit={handleUpdateTask} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        defaultValue={task.title}
                        placeholder="Task Title"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        defaultValue={task.category}
                        placeholder="Category"
                        className="input input-bordered w-full"
                        required
                    />
                    <textarea
                        name="description"
                        defaultValue={task.description}
                        placeholder="Task Description"
                        className="textarea textarea-bordered w-full"
                        required
                    />
                    <input
                        type="date"
                        name="deadline"
                        defaultValue={task.deadline}
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="number"
                        name="budget"
                        defaultValue={task.budget}
                        placeholder="Budget"
                        className="input input-bordered w-full"
                        required
                    />
                    <input type="email" value={user?.email || ''} readOnly className="input input-bordered w-full bg-gray-100" />
                    <input type="text" value={user?.displayName || ''} readOnly className="input input-bordered w-full bg-gray-100" />
                    <button type="submit" className="btn btn-primary w-full">Update Task</button>
                </form>
            ) : (
                <p>Loading task data...</p>
            )}
        </div>
    );
};

export default UpdateTask;
