import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    const [featuredTasks, setFeaturedTasks] = useState([]);

    useEffect(() => {
        fetch('https://quest-work-server.vercel.app/featured-tasks')
            .then((res) => res.json())
            .then((data) => setFeaturedTasks(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className='px-4 space-y-12'>

            <div className="text-center mt-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-700">
                    <Typewriter
                        words={[
                            'Find your next freelance task!',
                            'Post your task and get it done fast!',
                            'Trusted by thousands of task posters!',
                        ]}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
            </div>

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
                        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
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
                            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1665656474850-d2a0db61fe26?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
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
                <div data-aos="zoom-in" className="my-16">
                    <h2 className="text-3xl text-center font-bold mb-10">Featured Tasks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {featuredTasks.length > 0 ? (
                            featuredTasks.map((task) => (
                                <div key={task._id} className="bg-sky-600 p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                                    <h3 className="font-semibold text-base-content text-xl mb-2">{task.title}</h3>
                                    <p className="text-base-content">{task.description.substring(0, 80)}...</p>
                                    <p className="font-bold text-base-content mt-2">💰 ${task.budget}</p>
                                    <p className="text-sm text-base-content">⏳ {task.deadline}</p>
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

            <section
                className="bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 text-center py-10 rounded-xl shadow-md"
                data-aos="fade-right"
            >
                <h2 className="text-3xl font-bold mb-2">🎉 Special Offer This Month!</h2>
                <p className="text-lg">Get 50% off your first task posting. Limited time only.</p>
                <Link
                    to="/add-task"
                    className="btn mt-4 bg-yellow-500 hover:bg-yellow-600 text-white border-none"
                >
                    Post a Task Now
                </Link>
            </section>

            
            <section
                className="bg-sky-50 dark:bg-sky-950 text-sky-900 dark:text-sky-100 rounded-xl p-10 text-center mt-12 mb-20 shadow-md"
                data-aos="fade-left"
            >
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-6">Stay updated with the latest freelance opportunities and promotions.</p>

                <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full bg-white dark:bg-sky-900 text-sky-900 dark:text-white placeholder-sky-400 dark:placeholder-sky-300"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Subscribe
                    </button>
                </form>
            </section>



            <div className='flex justify-center items-center mt-14'>
                <h2 className='text-3xl font-bold'>Reviews from our clients</h2>
            </div>

            <section className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-5 mb-16 items-center lg:items-stretch justify-center'>

                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-500 bg-gray-200 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs dark:text-gray-600">3 days ago</span>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>This platform made finding freelance work so easy and efficient. I love the user-friendly interface!</p>
                        <p>Definitely a game-changer for anyone looking to work independently.</p>
                    </div>
                </div>

                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-500 bg-gray-200 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Sophia Martinez</h4>
                                <span className="text-xs dark:text-gray-600">21 hours ago</span>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>I faced a few bugs while posting my task, but the support team responded quickly and fixed it.</p>
                        <p>I appreciate the effort. Looking forward to new features!</p>
                    </div>
                </div>

                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-500 bg-gray-200 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Emma Johnson</h4>
                                <span className="text-xs dark:text-gray-600">2 days ago</span>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>The bidding system is fair and transparent. I got my first task within a day of signing up.</p>
                        <p>Could use some improvements in the notification system, but overall very solid.</p>
                    </div>
                </div>

            </section>




        </div>
    );
};

export default Home;
