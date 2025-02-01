import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div class="w-64 bg-gray-900 h-screen p-5 text-white">
        <h2 class="text-xl font-semibold mb-6">Dashboard</h2>
        <ul>
            <li class="mb-4">
                <Link href="/" class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                    <span class="text-lg">🏠</span>
                    <span>Home</span>
                </Link>
            </li>
            <li class="mb-4">
                <Link href="/dashboard" class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                    <span class="text-lg">📦</span>
                    <span>Dashboard</span>
                </Link>
            </li>
            <li class="mb-4">
                <Link href="/profile" class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                    <span class="text-lg">📜</span>
                    <span>Profile</span>
                </Link>
            </li>
            <li class="mb-4">
                <Link href="/settings" class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                    <span class="text-lg">⚙️</span>
                    <span>Settings</span>
                </Link>
            </li>
            <li class="mb-4">
                <a href="#" class="flex items-center space-x-2 p-2 hover:bg-red-600 rounded">
                    <span class="text-lg">🚪</span>
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    </div>
    );
};

export default Sidebar;