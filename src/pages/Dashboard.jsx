import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [totalTasks, setTotalTasks] = useState(0);
    const [myTasks, setMyTasks] = useState(0);
    const [myBids, setMyBids] = useState(0);

    useEffect(() => {
        fetch('https://quest-work-server.vercel.app/tasks')
            .then(res => res.json())
            .then(data => {
                setTotalTasks(data.length);
                const userTasks = data.filter(task => task?.email === user?.email);
                setMyTasks(userTasks.length);
            });

        fetch(`https://quest-work-server.vercel.app/bids/user/${user.email}`)
            .then(res => res.json())
            .then(data => setMyBids(data.length));
    }, [user?.email]);

    const handleExit = () => {
        navigate('/');
    };

    return (
        <div className="flex min-h-screen bg-base-100 text-base-content">

            <aside className="w-64 bg-base-200 p-6 shadow-md space-y-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                </div>
                <ul className="space-y-3">
                    <li><NavLink to="/dashboard/overview" className="btn btn-sm w-full justify-start">Overview</NavLink></li>
                    <li><NavLink to="/add-task" className="btn btn-sm w-full justify-start">Add Task</NavLink></li>
                    <li><NavLink to="/my-tasks" className="btn btn-sm w-full justify-start">My Tasks</NavLink></li>
                    <li><NavLink to="/browse-tasks" className="btn btn-sm w-full justify-start">All Tasks</NavLink></li>
                </ul>
                <button onClick={handleExit} className="btn bg-error text-white mt-8">Back</button>
            </aside>

            <main className="flex-1 p-8 bg-base-100 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-sky-600">
                        Welcome <span className="text-base-content">{user?.displayName}</span>
                    </h1>
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-sky-400 ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="User Avatar" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-sky-100 text-sky-800 p-6 rounded-xl shadow-md text-center">
                        <h3 className="text-xl font-semibold">Total Tasks</h3>
                        <p className="text-4xl font-bold">{totalTasks}</p>
                    </div>
                    <div className="bg-green-100 text-green-800 p-6 rounded-xl shadow-md text-center">
                        <h3 className="text-xl font-semibold">My Tasks</h3>
                        <p className="text-4xl font-bold">{myTasks}</p>
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 p-6 rounded-xl shadow-md text-center">
                        <h3 className="text-xl font-semibold">My Bids</h3>
                        <p className="text-4xl font-bold">{myBids}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
