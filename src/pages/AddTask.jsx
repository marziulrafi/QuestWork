import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddTask = () => {
    const { user } = use(AuthContext);

    const handleAddTask = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newTask = Object.fromEntries(formData.entries());

        newTask.email = user?.email;
        newTask.username = user?.displayName;

        fetch('https://quest-work-server.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Task added successfully ✅',
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">📝 Post a New Task</h2>
            <form onSubmit={handleAddTask} className="bg-base-200 p-6 rounded-xl shadow-md space-y-5">
                <input type="text" name="title" placeholder="Task Title" required className="input input-bordered w-full" />
                <textarea name="description" rows="4" placeholder="Task Description" required className="textarea textarea-bordered w-full"></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="number" name="budget" placeholder="Budget ($)" required className="input input-bordered w-full" />
                    <input type="date" name="deadline" required className="input input-bordered w-full" />
                </div>
                <select name="category" required className="select select-bordered w-full">
                    <option value="" >Select Category</option>
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Digital Marketing</option>
                    <option>Writing & Translation</option>
                    <option>Mobile App</option>
                    <option>Video Editing</option>
                    <option>Other</option>
                </select>
                <input type="email" value={user?.email || ''} readOnly className="input input-bordered w-full bg-base-100" />
                <input type="text" value={user?.displayName || ''} readOnly className="input input-bordered w-full bg-base-100" />
                <button type="submit" className="btn btn-primary w-full">🚀 Post Task</button>
            </form>
        </div>
    );
};

export default AddTask;
