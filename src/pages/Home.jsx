import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Home = () => {
    const [featuredTasks, setFeaturedTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/featured-tasks')
            .then((res) => res.json())
            .then((data) => setFeaturedTasks(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className='px-4 space-y-12'>

            
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay]}
                className="rounded-xl overflow-hidden"
            >
                <SwiperSlide>
                    <div
                        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                        }}
                    >
                        <div className="text-white text-center px-6 py-4 bg-black/50 backdrop-blur-sm rounded-md shadow-md max-w-xl">
                            <h2 className="text-4xl font-bold mb-2">Find the Perfect Task</h2>
                            <p className="text-lg mb-4">Browse tasks from various categories and earn today!</p>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                        }}
                    >
                        <div className="text-white text-center px-6 py-4 bg-black/50 backdrop-blur-sm rounded-md shadow-md max-w-xl">
                            <h2 className="text-4xl font-bold mb-2">Post Your Task</h2>
                            <p className="text-lg mb-4">Need something done? Post your task and get it completed fast.</p>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                        }}
                    >
                        <div className="text-white text-center px-6 py-4 bg-black/30 backdrop-blur-sm rounded-md shadow-md max-w-xl">
                            <h2 className="text-4xl font-bold mb-2">Work Anytime, Anywhere</h2>
                            <p className="text-lg mb-4">Stay connected and manage your tasks from any device, on the go.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <section>
                <div className="my-16">
                    <h2 className="text-3xl text-center font-bold mb-10">Featured Tasks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {featuredTasks.length > 0 ? (
                            featuredTasks.map((task) => (
                                <div key={task._id} className="bg-green-200 p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                                    <h3 className="font-semibold text-xl mb-2">{task.title}</h3>
                                    <p className="text-gray-600">{task.description.substring(0, 80)}...</p>
                                    <p className="font-bold mt-2">💰 ${task.budget}</p>
                                    <p className="text-sm text-gray-600">⏳ {task.deadline}</p>
                                    <Link
                                        to={`/task/${task._id}`}
                                        className="btn mt-8 flex items-center text-center font-bold"
                                    >
                                        See Details
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className='text-center font-semibold text-xl'>No featured tasks available.</p>
                        )}
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-center mt-16 mb-8">How It Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                    <div className="bg-purple-100 p-6 rounded-lg text-center">
                        <img src="https://img.icons8.com/?size=128&id=0prbldgxVuTl&format=png" alt="" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Create an Account</h3>
                        <p>Sign up for free and join our growing freelance community.</p>
                    </div>
                    <div className="bg-indigo-100 p-6 rounded-lg text-center">
                        <img src="https://img.icons8.com/?size=48&id=bG85sXmXRhPG&format=png" alt="Apply" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Apply for Tasks</h3>
                        <p>Browse available tasks and bid on ones that suit your expertise.</p>
                    </div>
                    <div className="bg-orange-100 p-6 rounded-lg text-center">
                        <img src="https://img.icons8.com/?size=96&id=32747&format=png" alt="Complete" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Complete and Earn</h3>
                        <p>Deliver quality work and get paid quickly and securely.</p>
                    </div>
                </div>
            </section>


            <section>
                <div className="bg-gray-100 p-10 rounded-lg mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-center">Why Choose QuestWork?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="font-bold text-xl mb-2">Trusted Platform</h3>
                            <p>Thousands of users trust QuestWork for their tasks.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="font-bold text-xl mb-2">Instant Matching</h3>
                            <p>Get connected with freelancers instantly.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md text-center">
                            <h3 className="font-bold text-xl mb-2">Easy to Use</h3>
                            <p>Post, Browse, and Bid seamlessly with our platform.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
