import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const TaskDetails = () => {
    const task = useLoaderData();
    const { user } = useContext(AuthContext);
    const [bidsCount, setBidsCount] = useState(0);
    const [isBidding, setIsBidding] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://quest-work-server.vercel.app/bids/user/${user.email}`)
                .then(res => res.json())
                .then(data => setBidsCount(data.length))
                .catch(err => console.error("Error fetching user bids:", err));
        }
    }, [user]);

    const handleBid = () => {
        if (!user) {
            alert("You must be logged in to place a bid.");
            return;
        }

        setIsBidding(true);

        const bidData = {
            taskId: task._id,
            bidderEmail: user.email,
            bidderName: user.displayName,
            amount: task.budget,
            message: `Bid for ${task.title}`,
            timestamp: new Date()
        };

        fetch('https://quest-work-server.vercel.app/bids', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bidData)
        })
            .then(res => res.json())
            .then(() => {
                setBidsCount(prev => prev + 1);
                alert("Bid placed successfully!");
            })
            .catch(err => {
                console.error("Error placing bid:", err);
                alert("Failed to place bid.");
            })
            .finally(() => setIsBidding(false));
    };

    return (
        <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow rounded">
            {user && (
                <p className="text-lg font-medium text-green-600 mb-4">
                    You bid for {bidsCount} opportunities.
                </p>
            )}
            {task ? (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Task Details</h2>
                    <p><strong>Title:</strong> {task.title}</p>
                    <p><strong>Category:</strong> {task.category}</p>
                    <p><strong>Description:</strong> {task.description}</p>
                    <p><strong>Deadline:</strong> {task.deadline}</p>
                    <p><strong>Budget:</strong> ${task.budget}</p>
                    <p><strong>Posted by:</strong> {task.username} ({task.email})</p>

                    <button
                        onClick={handleBid}
                        disabled={isBidding}
                        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        {isBidding ? "Bidding..." : "Bid"}
                    </button>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default TaskDetails;
