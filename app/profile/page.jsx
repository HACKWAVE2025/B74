"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Profile</h1>

      {user ? (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md">
          <p className="text-lg">
            <strong>Name:</strong> {user.fullName || "No name provided"}
          </p>
          <p className="text-lg mt-2">
            <strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}
          </p>
          <div className="mt-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      ) : (
        <p>Loading your profile...</p>
      )}
    </div>
  );
}
