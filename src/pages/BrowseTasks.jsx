import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BrowseTasks = () => {
    const tasks = useLoaderData();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="max-w-7xl mx-auto mt-6 px-4">
            <h2
                className="text-4xl font-bold mb-12 text-center text-indigo-600"
                data-aos="fade-down"
            >
                Browse All Tasks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {tasks && tasks.map((task, index) => (
                    <div
                        key={task._id}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        className="bg-gradient-to-br from-sky-100 to-indigo-100 border border-indigo-200 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-[240px] flex flex-col justify-between"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2 text-indigo-700">{task.title}</h3>
                            <p className="text-sm text-gray-700 line-clamp-3">
                                {task.description?.slice(0, 100)}...
                            </p>
                        </div>

                        <div className="px-4 pb-4">
                            <p className="text-sm font-medium text-indigo-600">💰 Budget: ${task.budget}</p>
                            <Link
                                to={`/task/${task._id}`}
                                className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-600 mt-3 w-full"
                            >
                                See Details
                            </Link>
                        </div>
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
