import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseTasks = () => {
    const tasks = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto mt-6 px-4">
            <h2 className="text-2xl font-bold mb-4">Browse Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks && tasks.map(task => (
                    <div key={task._id} className="border p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">{task.title}</h3>
                        <p className='break-words line-clamp-3'>{task.description?.slice(0, 100)}...</p>
                        <p className="text-sm font-medium">Budget: ${task.budget}</p>

                        <Link to={`/task/${task._id}`} className="btn btn-sm btn-outline mt-2">See Details</Link>
                    </div>
                ))}
            </div>

            {tasks && tasks.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No tasks available right now.</p>
            )}
            {!tasks && (
                <p className="text-center text-gray-500 mt-8">Loading tasks...</p>
            )}
        </div>
    );
};

export default BrowseTasks;