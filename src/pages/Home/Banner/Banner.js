import React from 'react';

const Banner = () => {
    return (
        <div>
            <section
                class="relative bg-[url(https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/40 sm:to-white/25"
                ></div>

                <div
                    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div class="max-w-xl text-center sm:text-left">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Welcome To

                            <strong class="block font-extrabold text-rose-700">
                                VisaPress
                            </strong>
                        </h1>

                        <div class="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="/"
                                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="/"
                                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;