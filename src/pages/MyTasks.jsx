import React, { use, useState, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyTasks = () => {
    const { user } = use(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://quest-work-server.vercel.app/tasks?email=${user.email}`)
                .then(res => res.json())
                .then(data => setTasks(data))
                .catch(err => console.error("Error fetching my tasks:", err));
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://quest-work-server.vercel.app/tasks/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
                            Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
                        } else {
                            Swal.fire('Failed', 'Could not delete the task.', 'error');
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting task:', error);
                        Swal.fire('Error', 'An error occurred while deleting the task.', 'error');
                    });
            }
        });
    };

    return (
        <div className="max-w-6xl mx-auto mt-6 p-4 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-8">My Posted Tasks</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Deadline</th>
                            <th>Budget</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {tasks.map(task => (
                            <tr key={task._id}>
                                <td>{task.title}</td>
                                <td>{task.category}</td>
                                <td>{task.deadline}</td>
                                <td>${task.budget}</td>
                                <td className="space-x-2">
                                    <Link to={`/update/${task._id}`} className="btn btn-sm bg-green-400">Update</Link>
                                    <button onClick={() => handleDelete(task._id)} className="btn btn-sm bg-red-500">
                                        Delete
                                    </button>
                                    <Link to={`/bids/${task._id}`} className="btn btn-sm bg-blue-400">Bids</Link>
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
