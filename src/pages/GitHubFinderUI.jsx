// src/pages/GithubFinderUI.js
import React from 'react';

// 'userData' prop ko receive kar liya
function GithubFinderUI({ userData }) {

    // Agar koi data nahi hai to kuch bhi render na karein
    if (!userData) {
        return null;
    }

    // console.log(userData);

    return (
        <div className="max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                <img
                    className="rounded-t-lg"
                    src={userData.avatar_url} // API se aayi image ka URL
                    alt={`${userData.login}'s avatar`}
                />
            </a>
            <div className="p-5">
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {userData.name || userData.login} {/* API se aaya naam ya login dikhayein */}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {userData.bio || 'No bio available.'} {/* API se aayi bio dikhayein */}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Public Repos: {userData.public_repos || 'No public repos available.'} {/* API se aayi bio dikhayein */}
                </p>
                <a
                    href={userData.html_url}
                    target="_blank" // Naye tab mein link kholne ke liye
                    rel="noopener noreferrer" // Security ke liye
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    View Profile on GitHub
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default GithubFinderUI;