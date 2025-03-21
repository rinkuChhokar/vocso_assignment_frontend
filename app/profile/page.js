import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import TokenSender from "@/app/components/TokenSender";
import Link from "next/link";

export default async function ProfilePage() {
    const session = await getSession();

    if (!session || !session.user) {
        redirect("/api/auth/login");
    }

    const { user, accessToken } = session;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-6">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-10 max-w-md text-center">
                {/* Profile Avatar */}
                <div className="flex flex-col items-center mb-6">
                    <img
                        src="/avatar.png"
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-3">
                        {user.name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                </div>

                {/* Token Sender Component */}
                <TokenSender accessToken={accessToken} userEmail={user.email} />

                {/* Logout Button */}
                <Link
                    href="/api/auth/logout"
                    className="block mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                    Logout
                </Link>
            </div>
        </div>
    );
}
