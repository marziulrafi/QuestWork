import React from "react";
import CountUp from 'react-countup';

const About = () => {
    return (
        <div id="success" className="text-center my-16 px-4 flex flex-col items-center text-base-content">

            <div className="max-w-3xl mb-10">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-sky-700">
                    Empowering Freelancers Simplifying Task Management
                </h1>
                <p className="mt-4 font-medium text-base opacity-80">
                    QuestWork connects talented freelancers with task posters. Whether you're looking to post a task or get hired — we’re here to make it effortless and reliable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">

                <div className="bg-sky-100 dark:bg-sky-900 px-8 py-10 rounded-2xl flex flex-col gap-2 text-left shadow hover:shadow-md transition">
                    <h1 className="text-[3rem] font-extrabold text-sky-700 dark:text-white">
                        <CountUp duration={4} enableScrollSpy scrollSpyDelay={200} end={1200} />+
                    </h1>
                    <p className="font-medium text-lg text-sky-800 dark:text-gray-300">Tasks Successfully Completed</p>
                </div>
                <div className="bg-emerald-100 dark:bg-emerald-900 px-8 py-10 rounded-2xl flex flex-col gap-2 text-left shadow hover:shadow-md transition">
                    <h1 className="text-[3rem] font-extrabold text-emerald-700 dark:text-white">
                        <CountUp duration={4} enableScrollSpy scrollSpyDelay={200} end={673} />+
                    </h1>
                    <p className="font-medium text-lg text-emerald-800 dark:text-gray-300">Positive Client Reviews</p>
                </div>

                <div className="bg-yellow-100 dark:bg-yellow-900 px-8 py-10 rounded-2xl flex flex-col gap-2 text-left shadow hover:shadow-md transition">
                    <h1 className="text-[3rem] font-extrabold text-yellow-700 dark:text-white">
                        <CountUp duration={4} enableScrollSpy scrollSpyDelay={200} end={800} />+
                    </h1>
                    <p className="font-medium text-lg text-yellow-800 dark:text-gray-300">Active Freelancers</p>
                </div>
            </div>
        </div>
    );
};

export default About;
