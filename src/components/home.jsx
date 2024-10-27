import React from 'react';

const Home = () => {
    return (
        <>
            <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-16 md:py-24 lg:py-56">
                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Are You a Supplier?
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 sm:text-xl md:text-2xl lg:text-6xl sm:px-8 lg:px-48">
                        Explore Matching Opportunities.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-3 mt-12">
                        {/* First Input Field */}
                        <div className="relative w-full sm:w-80 md:w-96 mx-auto sm:mx-0">
                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFA500">
                                <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z" />
                            </svg>
                            <input
                                className="pl-12 w-full py-3 sm:py-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                type="text"
                                placeholder="Search your required service here"
                            />
                        </div>

                        {/* Second Input Field */}
                        <div className="relative w-full sm:w-80 md:w-96 mx-auto sm:mx-0">
                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFA500">
                                <path d="M480-467.74q38.13 0 65.2-27.06 27.06-27.07 27.06-65.2t-27.06-65.2q-27.07-27.06-65.2-27.06t-65.2 27.06q-27.06 27.07-27.06 65.2t27.06 65.2q27.07 27.06 65.2 27.06Zm0 265.04q117.61-103.74 177.28-189.1 59.68-85.37 59.68-164.33 0-102.16-68.98-171.99-68.98-69.84-168-69.84T312-728.12q-68.96 69.83-68.96 171.99 0 78.96 59.68 163.83Q362.39-307.44 480-202.7Zm0 163.61Q297.17-189.78 208.63-312.72q-88.54-122.93-88.54-243.41 0-157.32 106.53-261.05Q333.16-920.91 480-920.91q146.84 0 253.38 103.73 106.53 103.73 106.53 261.05 0 120.48-88.54 243.41Q662.83-189.78 480-39.09ZM480-560Z" />
                            </svg>
                            <input
                                className="pl-12 w-full py-3 sm:py-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                type="text"
                                placeholder="Search your required service here"
                            />
                        </div>

                        {/* Search Button */}
                        <button className="inline-flex justify-center items-center py-3 px-5 text-sm sm:text-base font-medium text-white rounded-sm bg-green-700 w-full sm:w-32 mx-auto sm:mx-0">
                            Search
                        </button>
                    </div>
                    <p className=' text-white font-bold mt-10 text-xl'> Are you a buyer? <span className=' font-light border-b-2 cursor-pointer'>Click here if you are looking to post a requirements</span></p>
                </div>
            </section>

            <section className=' bg-white w-full h-96'>
                <div className=' md:flex items-center justify-around md:ml-24 md:mr-24 ml-16 mr-16  md:mt-24 mt-16'>
                    <div className="left space-y-6 ">
                        <h1 className=' md:text-4xl text-2xl font-bold'>Ready to dive into HABOT?</h1>
                        <p>Signing up with HABOT opens the door to a world of new opportunities <br />
                            and potential for business growth. Gain access to a vibrant community <br />
                            of like-minded individuals, unlock valuable resources, and take the first <br />
                            step towards realizing your entrepreneurial dreams.</p>
                        <button className="flex items-center justify-center space-x-2 border p-3 w-64 bg-green-700 text-white font-bold rounded-md gap-5">
                            <span>Sign up Today!</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#fff">
                                <path d="m553.85-253.85-42.16-43.38L664.46-450H180v-60h484.46L511.69-662.77l42.16-43.38L780-480 553.85-253.85Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="right flex space-x-6">
                        <div className=' flex flex-col space-y-4 w-60'>
                            <button className=' border p-4 rounded-lg border-orange-400 font-semibold text-xl text-gray-600'>Abu Dhabi</button>
                            <button className=' border p-4 rounded-lg border-orange-400 font-semibold text-xl text-gray-600'>Sharjah & Ajman</button>
                            <button className=' border p-4 rounded-lg border-orange-400 font-semibold text-xl text-gray-600'>Ras Al Khaimah</button>
                        </div>
                        <div className=' flex flex-col space-y-4 w-60'>
                            <button className=' border p-4 rounded-lg border-orange-400 font-semibold text-xl text-gray-600'>Dubai</button>
                            <button className=' border p-4 rounded-lg border-orange-400 font-semibold text-xl text-gray-600'>Fujairah</button>
                            <button className=' border p-4 rounded-lg border-orange-400 font-semibold text-xl text-gray-600'>Umm Al Quwain</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className=' bg-blue-950  w-full h-96'>
                <div className=' flex items-center justify-around ml-24 mr-24 mt-24'>

                </div>
            </section> */}

        </>
    );
};

export default Home;
