import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AddTask = () => {
    const { user } = useContext(AuthContext);

    const [task, setTask] = useState({
        title: '',
        description: '',
        budget: '',
        deadline: '',
        category: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user?.email || !user?.displayName) {
            setMessage('❌ User not logged in.');
            return;
        }

        const taskData = {
            ...task,
            email: user.email,
            username: user.displayName
        };

        try {
            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskData)
            });

            const data = await res.json();

            if (data.insertedId) {
                setMessage('✅ Task submitted successfully!');
                setTask({
                    title: '',
                    description: '',
                    budget: '',
                    deadline: '',
                    category: ''
                });
            } else {
                setMessage('❌ Submission failed.');
            }
        } catch (err) {
            console.error(err);
            setMessage('❌ Error submitting task.');
        }

        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">📝 Post a New Task</h2>

            {message && (
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 text-center">
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-5">
                <div>
                    <label className="block font-semibold mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                        placeholder="Task title"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Description</label>
                    <textarea
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        required
                        className="textarea textarea-bordered w-full"
                        rows={4}
                        placeholder="Describe your task..."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Budget ($)</label>
                        <input
                            type="number"
                            name="budget"
                            value={task.budget}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={task.deadline}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-semibold mb-1">Category</label>
                    <select
                        name="category"
                        value={task.category}
                        onChange={handleChange}
                        required
                        className="select select-bordered w-full"
                    >
                        <option value="" disabled>Select Category</option>
                        <option>Web Development</option>
                        <option>Graphic Design</option>
                        <option>Digital Marketing</option>
                        <option>Writing & Translation</option>
                        <option>Mobile App</option>
                        <option>Video Editing</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <input
                        className="input input-bordered w-full bg-gray-100"
                        type="email"
                        value={user?.email || ''}
                        readOnly
                    />
                    <input
                        className="input input-bordered w-full bg-gray-100"
                        type="text"
                        value={user?.displayName || ''}
                        readOnly
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full mt-4">
                    🚀 Post Task
                </button>
            </form>
        </div>
    );
};

export default AddTask;
