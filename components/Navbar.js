/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

const Navbar = () => {
    return (
        <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://github.com/certifiedRice/" class="flex items-center">
                    <img src="https://avatars.githubusercontent.com/certifiedrice" width="75px" height="75px" alt="profile picture" className="profile-picture" class="mr-3 h-6 sm:h-9" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap  text-white">CertifiedRice</span>
                </a>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900 bg-gray-900  border-gray-700">
                        <li>
                            <a href="../" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="../about" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-gray-400 md: hover:text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="../work" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-gray-400 md: hover:text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent">Work</a>
                        </li>
                        <li>
                            <a href="../contact" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-gray-400 md: hover:text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent">Contact</a>
                        </li>
                        <li>
                            <a href="../blogs" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-gray-400 md: hover:text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent">Blog</a>
                        </li>
                        <li>
                            <a href="https://github.com/CertifiedRice/website-certifiedrice" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-gray-400 md: hover:text-white  hover:bg-gray-700  hover:text-white md: hover:bg-transparent">Source</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;