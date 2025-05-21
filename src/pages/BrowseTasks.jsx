import React from 'react';
import { Link, useLoaderData } from 'react-router'; // Import useLoaderData and Link from react-router-dom

const BrowseTasks = () => {
    // useLoaderData hook retrieves the data resolved by the route's loader function
    // This `tasks` variable will directly contain the array of tasks fetched from the API
    const tasks = useLoaderData();

    // No need for useState or a conditional fetch inside the component anymore

    return (
        <div className="max-w-6xl mx-auto mt-6 px-4">
            <h2 className="text-2xl font-bold mb-4">Browse Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Ensure tasks is an array before mapping, in case the loader returns null/undefined */}
                {tasks && tasks.map(task => (
                    <div key={task._id} className="border p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">{task.title}</h3>
                        <p>{task.description?.slice(0, 100)}...</p>
                        <p className="text-sm font-medium">Budget: ${task.budget}</p>
                        {/* Use Link from react-router-dom for navigation */}
                        <Link to={`/task/${task._id}`} className="btn btn-sm btn-outline mt-2">See Details</Link>
                    </div>
                ))}
            </div>
            {/* Optionally, display a message if no tasks are found */}
            {tasks && tasks.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No tasks available right now.</p>
            )}
            {!tasks && (
                <p className="text-center text-gray-500 mt-8">Loading tasks...</p> // This would only show if loader didn't return an array
            )}
        </div>
    );
};

export default BrowseTasks;