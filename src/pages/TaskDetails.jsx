import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Loading from '../components/Loading';

const TaskDetails = () => {
    const task = useLoaderData();
    const [bidsCount, setBidsCount] = useState(0);

    const handleBid = () => {
        setBidsCount(bidsCount + 1);
    };

    return (
        <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow rounded">
            {task ? (
                <div>
   
                    <div className="mb-6 text-lg font-semibold text-red-500">
                        You bid for {bidsCount} {bidsCount === 1 ? 'opportunity' : 'opportunities'}.
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Task Details</h2>
                    <p><strong>Title:</strong> {task.title}</p>
                    <p><strong>Category:</strong> {task.category}</p>
                    <p><strong>Description:</strong> {task.description}</p>
                    <p><strong>Deadline:</strong> {task.deadline}</p>
                    <p><strong>Budget:</strong> ${task.budget}</p>
                    <p><strong>Posted by:</strong> {task.username} ({task.email})</p>

                    <button 
                        onClick={handleBid}
                        className="mt-6 px-5 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Bid
                    </button>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default TaskDetails;
