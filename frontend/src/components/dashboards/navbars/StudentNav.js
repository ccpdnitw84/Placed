import React from "react";

export default function StudentNav() {
    return (
        <nav class="block w-full px-6 py-3 mx-auto text-white bg-transparent backdrop-blur-sm">
            <div class="flex items-center justify-between text-blue-gray-900">
                <a href="#" class="flex mr-4 cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased items-center">
                    <img src="/logo.svg" className="h-8" alt="logo" />
                    <span className="ml-2 text-2xl">PLACED</span>
                </a>
                <div className="flex-1 text-center">
                    <span className="text-2xl text-gray-300">Welcome Student!</span>
                </div>
                <div class="hidden lg:block">
                    <ul class="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <a href="#" class="flex items-center transition-colors hover:text-blue-500 text-gray-300">
                                About
                            </a>
                        </li>
                        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <a href="#" class="flex items-center transition-colors hover:text-blue-500 text-gray-300">
                                Notifications
                            </a>
                        </li>
                        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <a href="#" class="flex items-center transition-colors hover:text-blue-500 text-gray-300">
                                Applications
                            </a>
                        </li>
                        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <a href="#" class="flex items-center transition-colors hover:text-blue-500 text-gray-300">
                                Profile
                            </a>
                        </li>
                        <button className="w-full bg-red-500 hover:bg-orange-600 text-white py-2 px-2 rounded-xl">
                            Logout
                        </button>
                    </ul>
                </div>
                <button class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button">
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                        aria-hidden="true" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </nav>
    );
}