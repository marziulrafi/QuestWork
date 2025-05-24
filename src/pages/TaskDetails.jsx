import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';

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
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Bidded",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.error("Error placing bid:", err);
                alert("Failed to place bid.");
            })
            .finally(() => setIsBidding(false));
    };

    return (
        <div className="max-w-3xl mx-auto mt-6 p-6 bg-base-100 shadow rounded text-base-content">
            {user && (
                <p className="text-lg font-medium text-success mb-4">
                    You bid for {bidsCount} opportunities.
                </p>
            )}

            {task ? (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Task Details</h2>
                    <p><span className="font-semibold">Title:</span> {task.title}</p>
                    <p><span className="font-semibold">Category:</span> {task.category}</p>
                    <p><span className="font-semibold">Description:</span> {task.description}</p>
                    <p><span className="font-semibold">Deadline:</span> {task.deadline}</p>
                    <p><span className="font-semibold">Budget:</span> ${task.budget}</p>
                    <p><span className="font-semibold">Posted by:</span> {task.username} ({task.email})</p>

                    <button
                        onClick={handleBid}
                        disabled={isBidding}
                        className="mt-6 bg-primary cursor-pointer text-primary-content px-4 py-2 rounded hover:bg-primary-focus"
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
