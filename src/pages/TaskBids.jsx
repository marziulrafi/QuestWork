import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TaskBids = () => {
    const { taskId } = useParams();
    const [bids, setBids] = useState([]);

    useEffect(() => {
        fetch(`https://quest-work-server.vercel.app/bids/task/${taskId}`) 
            .then(res => res.json())
            .then(data => setBids(data))
            .catch(err => console.error("Error fetching bids:", err));
    }, [taskId]);

    return (
        <div className="max-w-4xl mx-auto mt-6 p-4">
            <h2 className="text-2xl font-bold mb-4">Bids for This Task</h2>
            {bids.length > 0 ? (
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>Bidder</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Message</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {bids.map(bid => (
                            <tr key={bid._id}>
                                <td>{bid.bidderName}</td>
                                <td>{bid.bidderEmail}</td>
                                <td>${bid.amount}</td>
                                <td>{bid.message}</td>
                                <td>{new Date(bid.timestamp).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No bids found for this task.</p>
            )}
        </div>
    );
};

export default TaskBids;
