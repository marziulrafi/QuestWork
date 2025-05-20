import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';


const MyTasks = () => {
    const { user } = use(AuthContext);
    const [tasks, setTasks] = useState([]);

    if (tasks.length === 0 && user?.email) {
        fetch(`http://localhost:3000/tasks?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error("Error fetching my tasks:", err));
    }

   

    return (
        <div className="max-w-6xl mx-auto mt-6 p-4">
            <h2 className="text-2xl font-bold mb-4">My Posted Tasks</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Budget</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task._id}>
                                <td>{task.title}</td>
                                <td>{task.deadline}</td>
                                <td>${task.budget}</td>
                                <td className="space-x-2">
                                    <Link to={`/update/${task._id}`} className="btn btn-sm btn-info">Update</Link>
                                    <button onClick={() => (task._id)} className="btn btn-sm btn-error">Delete</button>
                                    <Link to={`/bids/${task._id}`} className="btn btn-sm btn-secondary">Bids</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTasks;
