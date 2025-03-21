import Image from "next/image";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-6">
      <main className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-10 max-w-lg text-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <Image
            className="dark:invert"
            src="/logo.png"
            alt="Next.js logo"
            width={120}
            height={30}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Welcome to the <span className="text-blue-500">Auth0</span> Demo App
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Secure authentication with <span className="font-semibold">Auth0</span>
        </p>

        {/* Authentication Links */}
        {session ? (
          <Link
            href="/profile"
            className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Go to Profile
          </Link>
        ) : (
          <Link
            href={`/api/auth/login?prompt=login`}
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        )}
      </main>
    </div>
  );
}
