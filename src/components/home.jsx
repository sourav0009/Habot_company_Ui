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

            <section className=' bg-white w-full h-90'>
                <div className=' md:flex items-center justify-around md:ml-16 md:mr-16 ml-12 mr-12  md:mt-24 mt-14'>
                    <div className="left md:space-y-6 space-y-4 ">
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
                    <div className="right flex space-x-6 mt-8">
                        <div className=' flex flex-col space-y-4 md:w-60'>
                            <button className=' border md:p-4 p-2 rounded-lg border-orange-400 font-semibold md:text-xl text-gray-600'>Abu Dhabi</button>
                            <button className=' border md:p-4 p-2 rounded-lg border-orange-400 font-semibold md:text-xl text-gray-600'>Sharjah & Ajman</button>
                            <button className=' border md:p-4 p-2 rounded-lg border-orange-400 font-semibold md:text-xl text-gray-600'>Ras Al Khaimah</button>
                        </div>
                        <div className=' flex flex-col space-y-4 md:w-60'>
                            <button className=' border md:p-4 p-2 rounded-lg border-orange-400 font-semibold md:text-xl text-gray-600'>Dubai</button>
                            <button className=' border md:p-4 p-2 rounded-lg border-orange-400 font-semibold md:text-xl text-gray-600'>Fujairah</button>
                            <button className=' border md:p-4 p-2 rounded-lg border-orange-400 font-semibold md:text-xl text-gray-600'>Umm Al Quwain</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className=' bg-blue-950  md:ml-28 md:mr-28 ml-8 mr-8  h-96 mb-10 rounded-lg shadow-xl'>
                <div className=' md:mt-24'>
                    <div className='md:flex md:space-x-6 space-y-6 items-center'>
                        <div className="left ml-16 relative mt-5">
                            <a
                                href="https://www.youtube.com/watch?v=IZLp-TZyDkQ"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-45 w-[65%] mt-10" src="./pic.jpeg" alt="Linked Image" />
                            </a>
                            <svg
                                className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/3"
                                xmlns="http://www.w3.org/2000/svg"
                                height="94px"
                                viewBox="0 -960 960 960"
                                width="94px"
                                fill="#FF0000"
                            >
                                <path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
                            </svg>
                        </div>
                        <div className="right mr-10 text-white space-y-9">
                            <div className=' flex justify-around text-3xl font-bold  '>
                                <h1 className=' hover:text-orange-500 hover:border-b-4 hover:border-orange-500 '>Buyer </h1>
                                <h1 className=' hover:text-orange-500 hover:border-b-4 hover:border-orange-500 '>Supplier </h1>
                            </div>
                            <div className="space-y-2 font-semibold ml-5">
                                <p className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#008000">
                                        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                    </svg>
                                    Post your requirements.
                                </p>
                                <p className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#008000">
                                        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                    </svg>
                                    Sit back for multiple suppliers to contact you.
                                </p>
                                <p className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#008000">
                                        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                    </svg>
                                    Choose among the suppliers based on the ratings and reviews.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className=' w-full h-48 bg-sky-200 mt-24 mb-24'>
                <div className=' flex items-center md:justify-around justify-between md:p-20 p-16 '>
                    <h1 className=' md:text-3xl text-xl font-semibold'>Let Suppliers <span className=' border-b-4 border-orange-500'> Find You</span></h1>
                    <button className=' bg-orange-500 p-2 md:w-40 w-40 rounded-md text-white font-semibold'>Get Verified</button>
                </div>
            </section>


            <section className=' h-[100%]  mr-32 ml-32 mb-10'>
                <div className="up flex justify-center flex-col items-center space-y-3">
                    <h1 className=' text-2xl font-bold'>How it works?</h1>
                    <p className=' text-center font-sans'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <br /> potential buyers, and build successful business relationships, sharing valuable feedback.
                    </p>
                </div>
                <div className=" flex justify-center flex-col items-center mt-5">
                    <div className=" flex">
                        <div className=' bg-cyan-50 h-48 w-72 text-center flex flex-col items-center p-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px" fill="#000000"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" /></svg>
                            <div className=' font-semibold'>Select Your Role and <br /> Sign Up</div>
                        </div>
                        <div className=' bg-white h-48 w-72 text-center flex flex-col items-center p-8 '>
                            <svg width="64" height="64" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.2534 13.4709H49.6764L41.2534 3.89185V13.4709Z" fill="black" />
                                <path d="M50.1889 31.4928C50.9841 31.4928 51.7755 31.5426 52.5596 31.6415V18.2038H38.7921C37.4829 18.2038 36.5119 17.1958 36.5119 15.8889V0H0.951602C0.851121 0 0.76923 0.0815705 0.76923 0.182051V74.818C0.76923 74.9184 0.851121 75 0.951602 75H52.3774C52.478 75 52.5598 74.9184 52.5598 74.818V68.8439C51.7756 68.9429 50.9843 68.9926 50.1891 68.9926C40.6349 68.9926 32.7242 61.8348 31.5551 52.6091H8.79311V47.8761H31.555C32.724 38.6505 40.6349 31.4928 50.1889 31.4928ZM32.5 60.6189V65.3519H8.79311V60.6189H32.5ZM8.79311 9.64808H28.4881V14.3811H8.79311V9.64808ZM8.79311 22.3907H44.9005V27.1237H8.79311V22.3907ZM32.5 39.8665H8.79311V35.1335H32.5V39.8665Z" fill="black" />
                                <path d="M50.1889 36.2258C42.4463 36.2258 36.1471 42.5138 36.1471 50.2428C36.1471 57.9718 42.4461 64.2598 50.1889 64.2598C57.9317 64.2598 64.2308 57.9718 64.2308 50.2428C64.2308 42.5138 57.9317 36.2258 50.1889 36.2258ZM49.9601 56.7401C49.159 57.5978 47.8024 57.7332 46.8473 57.0513L41.4117 53.172L44.1692 49.3218L47.9115 51.9927L55.7768 43.5709L59.2449 46.7984L49.9601 56.7401Z" fill="#EB7150" />
                            </svg>

                            <div className=' font-semibold'>Buyers Post Your Requirements</div>
                        </div>
                        <div className=' bg-cyan-50 h-48 w-72 text-center flex flex-col items-center p-8 '>
                            <svg width="64" height="64" viewBox="0 0 76 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.2778 73.2965H4.2403C1.81727 73.2965 0 71.3278 0 69.0562V4.2403C0 1.96871 1.96871 0 4.2403 0H50.2778C52.7008 0 54.5181 1.96871 54.5181 4.2403V33.1652C47.8548 28.622 38.7684 29.5306 32.8623 35.4368C26.3504 41.9486 26.5018 53.0037 33.1652 59.5156C38.9199 65.1188 47.8548 65.876 54.5181 61.4843V69.0562C54.5181 71.3278 52.7008 73.2965 50.2778 73.2965ZM29.0763 65.7246H8.32915C6.9662 65.7246 6.9662 63.6044 8.32915 63.6044H28.9249C30.4393 63.6044 30.4393 65.7246 29.0763 65.7246ZM24.836 56.3354H8.32915C6.9662 56.3354 6.9662 54.2152 8.32915 54.2152H24.836C26.3504 54.2152 26.3504 56.3354 24.836 56.3354ZM22.5644 47.0976H8.32915C6.9662 47.0976 6.9662 44.826 8.32915 44.826H22.5644C24.0788 44.826 24.0788 47.0976 22.5644 47.0976ZM25.5932 37.7083H8.32915C6.9662 37.7083 6.9662 35.4368 8.32915 35.4368H25.5932C27.1076 35.4368 27.1076 37.7083 25.5932 37.7083ZM46.0375 28.3191H8.32915C6.9662 28.3191 6.9662 26.0475 8.32915 26.0475H46.0375C47.5519 26.0475 47.5519 28.3191 46.0375 28.3191ZM35.7396 18.9299H18.7785C17.2641 18.9299 17.2641 16.6583 18.7785 16.6583H35.7396C37.254 16.6583 37.254 18.9299 35.7396 18.9299Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.4053 39.6771C41.4942 35.4368 48.309 35.4368 52.5493 39.5257C59.364 46.3404 54.6694 58.0012 45.1287 58.0012C36.0424 58.0012 30.5906 46.9462 37.4053 39.6771ZM30.1363 47.4005C30.1363 34.0739 46.0374 27.562 55.4266 36.6483C61.0298 42.1001 61.4842 50.8836 56.4867 56.7897L60.4241 60.7271L58.9097 62.2415L54.9723 58.4556C45.7345 66.7847 30.2877 60.4243 30.1363 47.4005Z" fill="#EB7150" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M60.4244 63.3015C60.1215 63.3015 59.8186 63.15 59.6672 62.9986L54.2154 57.6982C53.1553 56.6381 54.6697 55.1237 55.7298 56.0324L61.1816 61.4842C61.9388 62.0899 61.333 63.3015 60.4244 63.3015Z" fill="#EB7150" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M68.7533 77.5369C68.6018 77.5369 68.299 77.3854 67.9961 77.234L57.6982 67.0876C56.6381 66.0275 56.7896 64.3617 57.6982 63.453L61.6356 59.3642C62.5443 58.4555 64.3615 58.3041 65.4216 59.3642L75.7195 69.5106C76.0224 69.8135 76.1738 70.5707 75.7195 71.025L69.6619 77.0826C69.359 77.3854 69.0562 77.5369 68.7533 77.5369Z" fill="#EB7150" />
                            </svg>

                            <div className=' font-semibold'>Review, Select, and Contact the Best Suppliers</div>
                        </div>
                    </div>
                    <div className=" flex">
                        <div className=' bg-white h-48 w-72 text-center flex flex-col items-center p-8 '>
                            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_215)">
                                    <mask id="mask0_1_215" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="75">
                                        <path d="M0 7.62939e-06H75V75H0V7.62939e-06Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_1_215)">
                                        <path d="M30.1758 72.0701H17.5781C9.48794 72.0701 2.92969 65.5118 2.92969 57.4216V17.5779C2.92969 9.4877 9.48794 2.92945 17.5781 2.92945H57.4219C65.5121 2.92945 72.0703 9.4877 72.0703 17.5779V32.2263" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M31.2012 20.5078C31.2012 23.7439 28.5779 26.3672 25.3418 26.3672C22.1057 26.3672 19.4824 23.7439 19.4824 20.5078C19.4824 17.2717 22.1057 14.6484 25.3418 14.6484C28.5779 14.6484 31.2012 17.2717 31.2012 20.5078Z" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M42.1875 28.418H60.3516" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.2852 48.9258H38.6719" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.2852 59.1797H26.9531" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M69.7964 44.1684C72.8283 47.2003 72.8283 52.1161 69.7964 55.1479L59.5265 65.4177C56.9771 67.9671 53.7301 69.7046 50.195 70.4111L41.8945 72.0703L43.5537 63.7698C44.2602 60.2347 45.9976 56.9877 48.5471 54.4383L58.8169 44.1684C61.8487 41.1365 66.7644 41.1365 69.7964 44.1684Z" stroke="#EB7150" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M42.1875 18.1641H60.3516" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M33.1055 38.0859C31.3126 36.4541 28.9128 35.4492 26.272 35.4492H24.4116C21.7707 35.4492 19.3709 36.4541 17.5781 38.0859" stroke="black" stroke-width="4.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_215">
                                        <rect width="75" height="75" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className=' font-semibold'>Suppliers Complete your profile and get notified for opportunities</div>
                        </div>
                        <div className=' bg-cyan-50 h-48 w-72 text-center flex flex-col items-center p-8 '>
                            <svg width="64" height="64" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_194)">
                                    <path d="M45.4258 69.4654L35.3054 69.4651V59.5411H15.1822V55.1522H39.4976L45.0324 49.6175H15.1822V45.2287H49.4212L54.956 39.6939H15.1822V35.3051H59.3448L65.0764 29.5734V2.76738C65.0764 1.24146 63.835 0 62.309 0C60.7831 0 59.5417 1.24146 59.5417 2.76738C59.5417 4.29302 60.7828 5.53418 62.3086 5.53418H62.309V9.923L9.92358 9.92344V75H65.0764V49.8149L45.4258 69.4654ZM15.1822 25.3816H39.9708V29.7705H15.1822V25.3816Z" fill="black" />
                                    <path d="M2.7668 5.53486L55.7093 5.53442C55.3509 4.68276 55.1528 3.7479 55.1528 2.76763C55.1528 1.78721 55.3512 0.851904 55.7096 0.000244154H2.76738C1.24146 9.76692e-05 0 1.24155 0 2.76748C0 4.29355 1.24131 5.53486 2.7668 5.53486Z" fill="black" />
                                    <path d="M75 32.5381C75 31.7988 74.7122 31.1039 74.1895 30.5811C73.1104 29.5021 71.3546 29.5021 70.2754 30.5811L68.3187 32.5378L72.2328 36.4519L74.1895 34.4952C74.7122 33.9725 75 33.2774 75 32.5381Z" fill="#EB7150" />
                                    <path d="M45.7055 62.9792L41.7916 59.0652L39.6943 61.1624V65.0765L43.6081 65.0766L45.7055 62.9792Z" fill="#EB7150" />
                                    <path d="M44.8855 55.9618L65.2029 35.6443L69.1163 39.5577L48.7988 59.8752L44.8855 55.9618Z" fill="#EB7150" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_194">
                                        <rect width="75" height="75" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className=' font-semibold'>Contact to Buyers and Share your Quote for the service</div>
                        </div>
                        <div className=' bg-white h-48 w-72 text-center flex flex-col items-center p-8 '>
                            <svg width="64" height="64" viewBox="0 0 87 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.9361 70.393C30.1146 68.9165 29.8843 66.7492 28.4078 65.5707C27.7034 65.0018 26.9448 64.7308 26.1592 64.7308C26.0237 64.7308 25.8883 64.7444 25.7528 64.7579C24.8317 64.8663 24.0189 65.3269 23.4636 66.0583L18.9257 71.9237C18.4109 72.5739 18.1536 73.3054 18.1536 74.064C18.1536 75.107 18.6277 76.0823 19.4404 76.746C20.9034 77.9245 23.0707 77.6807 24.2628 76.2178L28.9361 70.393Z" fill="black" />
                                <path d="M16.948 70.0272L21.5129 64.1483C22.0277 63.471 22.3121 62.6718 22.3121 61.8319C22.3121 60.667 21.7839 59.5833 20.8627 58.8518C20.2125 58.3371 19.4133 58.0662 18.587 58.0662C18.4245 58.0662 18.2619 58.0797 18.0994 58.0933C17.097 58.2152 16.2165 58.7299 15.6069 59.5156L11.042 65.3945C9.78219 67.0335 10.0667 69.3905 11.6922 70.6503C12.4914 71.2734 13.4667 71.5443 14.4555 71.4224C15.4579 71.314 16.3384 70.8128 16.948 70.0272Z" fill="black" />
                                <path d="M8.26495 52.0248L12.3423 46.498L13.8188 44.4932C13.8323 44.4797 13.8323 44.4797 13.8459 44.4661L22.7049 32.4509L22.7455 32.4103L22.9487 32.1394C23.1248 31.9091 23.0842 31.5298 22.8268 31.3402L16.406 26.274C16.2706 26.1656 16.1351 26.1521 16.0403 26.1521C16.0132 26.1521 15.9861 26.1521 15.959 26.1521C15.8642 26.1656 15.6881 26.2063 15.5526 26.3824L0.123868 47.3243C-0.0793199 47.5952 -0.0251365 47.961 0.232235 48.1777L6.5988 53.2032C6.73426 53.3116 6.89681 53.3522 7.07291 53.3252C7.18128 53.3116 7.34383 53.2574 7.47929 53.0813L8.2514 52.0383C8.2514 52.0383 8.2514 52.0248 8.26495 52.0248Z" fill="black" />
                                <path d="M35.2212 76.475L35.2754 76.3938C35.289 76.3802 35.3025 76.3667 35.3025 76.3531C35.3161 76.326 35.3432 76.2854 35.3567 76.2583C35.6954 75.7707 35.8714 75.1882 35.8714 74.5922C35.8714 73.644 35.438 72.777 34.693 72.2216C34.1647 71.8288 33.5551 71.6392 32.932 71.6392C32.0651 71.6392 31.1981 72.0184 30.6292 72.7364L27.175 77.0169C26.6602 77.6535 26.4435 78.4527 26.5519 79.2655C26.6602 80.0647 27.0666 80.7555 27.7168 81.2432L27.9606 81.4464C28.5025 81.8528 29.2881 82.0424 30.0738 81.934C30.8595 81.8257 31.5368 81.4057 32.0109 80.7826L35.2212 76.475Z" fill="black" />
                                <path d="M43.3488 24.6485C49.9592 24.6485 55.3369 19.2707 55.3369 12.6604C55.3369 6.04996 49.9592 0.658691 43.3488 0.658691C36.7384 0.658691 31.3472 6.03641 31.3472 12.6604C31.3472 19.2707 36.7384 24.6485 43.3488 24.6485ZM37.3751 12.3623C37.9034 11.8341 38.7568 11.8341 39.2851 12.3623L41.2221 14.2994L47.3991 8.12248C47.9273 7.59419 48.7807 7.59419 49.309 8.12248C49.8373 8.65077 49.8373 9.50416 49.309 10.0324L42.1839 17.1576C41.9265 17.415 41.5879 17.5504 41.2221 17.5504C40.8564 17.5504 40.5177 17.4014 40.2604 17.1576L37.3615 14.2588C36.8468 13.744 36.8468 12.8906 37.3751 12.3623Z" fill="#EB7150" />
                                <path d="M67.799 40.9578L64.846 33.6701L63.0986 34.6454C61.8795 35.3363 60.4029 35.6207 58.9671 35.4175L43.6873 33.1554C41.818 32.8844 39.8809 33.5076 38.5263 34.808L37.0769 36.2032C37.0769 36.2032 37.0769 36.2032 37.0634 36.2167L31.4554 41.5945C31.0896 41.9466 31.0084 42.353 31.0084 42.6375C31.0084 43.0845 31.2251 43.6805 31.8347 43.965C34.598 45.2925 37.849 45.2248 40.5582 43.8024L42.0347 43.0303C42.9829 42.5291 44.026 42.2853 45.069 42.2853C46.532 42.2853 47.9814 42.7729 49.1599 43.7347L49.8913 44.3172L63.532 55.2487C64.1958 55.7635 64.8866 56.1969 65.591 56.4949C65.8213 56.5898 66.0922 56.6981 66.3496 56.7929C66.5257 56.8607 66.7153 56.9284 66.905 56.969C67.1623 57.0503 67.352 57.091 67.5416 57.118C67.8396 57.1722 68.1106 57.2264 68.3815 57.24C68.7066 57.2806 68.9369 57.2941 69.1671 57.2941C69.7496 57.3077 70.2508 57.2941 70.7114 57.2264L74.1791 56.7388L67.799 40.9578Z" fill="black" />
                                <path d="M76.0213 26.5856C75.94 26.3824 75.8046 26.2875 75.6962 26.2469C75.6149 26.2063 75.4253 26.1656 75.2221 26.2605L66.9185 29.9449C66.6069 30.0804 66.4579 30.4326 66.5798 30.7306L67.1623 32.1665L68.3814 35.1601L77.2269 56.9961C77.4301 57.3483 77.7552 57.4296 78.0126 57.3076L86.3297 53.6367C86.6277 53.5012 86.7632 53.1626 86.6413 52.851L76.0213 26.5856Z" fill="black" />
                                <path d="M68.138 59.9085C67.8535 59.895 67.4878 59.8272 67.122 59.7595C66.8511 59.7189 66.526 59.6511 66.2009 59.5428C65.9842 59.4886 65.7132 59.3938 65.4559 59.3125C65.1579 59.2041 64.8463 59.0822 64.5347 58.9468C63.6136 58.5404 62.7331 57.9985 61.8798 57.3348L47.494 45.8208C46.302 44.859 44.6629 44.6965 43.3083 45.4009L41.8318 46.173C38.3912 47.9881 34.219 48.0694 30.6971 46.3897C29.2342 45.6989 28.313 44.2495 28.313 42.624C28.313 41.4861 28.76 40.4295 29.5863 39.6303L32.7425 36.6096H27.1481C26.1321 36.6096 25.1568 36.2438 24.4118 35.5801L24.019 35.2144L16.0134 46.0917C15.9727 46.1323 15.9456 46.1865 15.905 46.2272L15.1871 47.2025L12.9655 50.2232L11.2452 52.5531L12.0715 53.1762C13.25 54.0296 13.9679 55.4519 13.9679 56.9691V57.3619C14.9839 56.3053 16.3114 55.6145 17.7879 55.4248C19.5082 55.2081 21.2014 55.6687 22.556 56.7252C24.1409 57.9715 25.0349 59.8272 25.0349 61.832C25.0349 61.9404 25.0078 62.0488 25.0078 62.1571C25.1568 62.13 25.3058 62.0759 25.4549 62.0623C27.1074 61.8727 28.733 62.3332 30.0334 63.3898C31.7808 64.8121 32.5664 66.9253 32.3497 68.9572C33.7178 68.8082 35.1402 69.1604 36.3322 70.0544C37.7681 71.1245 38.6079 72.7771 38.6079 74.5923C38.6079 74.6329 38.5944 74.6735 38.5944 74.7277C39.976 74.511 41.4255 74.7819 42.631 75.554C44.2836 76.6241 45.2725 78.4393 45.2725 80.417C45.2725 81.5548 44.9474 82.6385 44.3514 83.5596L44.392 83.5867C45.6247 84.5214 47.5076 84.413 48.6048 83.3023C49.2685 82.6385 49.6072 81.7445 49.5394 80.8098C49.4853 79.8887 49.0247 79.0353 48.2797 78.4664L40.2199 72.1811C39.6374 71.7205 39.529 70.8671 39.9896 70.2847C40.4502 69.7022 41.3035 69.5938 41.886 70.0544L51.0972 77.2337C52.2486 78.1142 53.8741 78.0058 54.9036 76.9763C55.5132 76.3668 55.8112 75.5405 55.7435 74.6871C55.6757 73.8337 55.2423 73.0616 54.5379 72.5739C53.8335 72.0863 54.5379 72.5739 54.5243 72.5739L45.1912 65.8958C44.5816 65.4623 44.4462 64.6089 44.8797 63.9994C45.3131 63.3898 46.153 63.2544 46.7761 63.6878L56.5427 70.6775C58.0327 71.7341 60.1052 71.4767 61.2837 70.0815C61.9204 69.3229 62.2049 68.3612 62.0829 67.3858C61.961 66.4105 61.4598 65.5436 60.6606 64.9611L55.9737 61.4798L50.4064 57.3483C49.8104 56.9013 49.6749 56.0615 50.1219 55.4519C50.2303 55.3029 50.3657 55.1945 50.5012 55.1133L50.5148 55.0997C50.9753 54.8288 51.5578 54.8424 52.0183 55.1675L63.3427 63.5388C64.5754 64.4464 66.3905 64.3109 67.5148 63.2137C68.3682 62.3603 68.6527 61.087 68.287 59.9492C68.2328 59.9221 68.1786 59.9221 68.138 59.9085Z" fill="black" />
                                <path d="M41.4252 83.0718L42.0618 82.083C42.3869 81.5953 42.5495 81.0128 42.5495 80.4033C42.5495 79.3467 42.0212 78.3714 41.1542 77.816C40.1654 77.1794 38.8785 77.1794 37.8626 77.7889C37.7542 77.8431 37.7136 77.8973 37.6459 77.9515C37.6323 77.965 37.6052 77.9786 37.5917 77.9921C37.5781 77.9921 37.5781 78.0057 37.5646 78.0192C37.5104 78.0598 37.4427 78.1411 37.3885 78.1953C37.0092 78.6694 36.0474 79.9156 35.1941 81.0399C34.7064 81.7308 34.5168 82.5571 34.6658 83.3834C34.8283 84.2232 35.3024 84.9276 36.0204 85.3882L36.21 85.5101C36.8737 85.9435 37.7 86.1061 38.4857 85.93C39.2985 85.7539 39.9893 85.2798 40.4363 84.589L41.4252 83.0718C41.4116 83.0854 41.4116 83.0854 41.4252 83.0718Z" fill="black" />
                            </svg>

                            <div className=' font-semibold'>Both the Parties can Connect and Make Business Leave a Feedback</div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
