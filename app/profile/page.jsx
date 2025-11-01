"use client";

import { useState } from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.primaryEmailAddress?.emailAddress || "");

  const handleSave = async () => {
    try {
      await user.update({
        firstName: name.split(" ")[0],
        lastName: name.split(" ").slice(1).join(" "),
      });
      setOpen(false);
    } catch (err) {
      console.error("Update error:", err);
      alert("Something went wrong while updating your profile.");
    }
  };

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen text-green-700">
        Loading your profile...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-green-50 to-white">
      {/* Header */}
      <div className="bg-green-700 py-12 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold tracking-wide">Your Profile</h1>
        <p className="text-green-100 text-lg mt-2">
          Manage your account and personalize your Beeja experience
        </p>
      </div>

      {/* Content */}
      <div className="flex justify-center px-6 mt-[-4rem]">
        <Card className="w-full max-w-xl bg-white/80 backdrop-blur-md shadow-xl border border-green-100 rounded-2xl">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl text-green-800 font-semibold">
                Account Details
              </CardTitle>
              <p className="text-gray-500 text-sm mt-1">
                View or update your information
              </p>
            </div>
            <UserButton afterSignOutUrl="/" />
          </CardHeader>

          <Separator />

          <CardContent className="mt-6 space-y-6">
            <div>
              <Label className="text-gray-700">Full Name</Label>
              <p className="text-lg font-medium text-green-800 mt-1">
                {user.fullName || "No name provided"}
              </p>
            </div>

            <div>
              <Label className="text-gray-700">Email</Label>
              <p className="text-lg font-medium text-green-800 mt-1">
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>

            <div className="flex justify-end pt-6">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-xl">
                    Edit Profile
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md bg-white rounded-2xl shadow-lg border border-green-100">
                  <DialogHeader>
                    <DialogTitle className="text-green-800">
                      Edit Your Profile
                    </DialogTitle>
                    <DialogDescription>
                      Update your details below and save changes.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-5 mt-4">
                    <div>
                      <Label>Name</Label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input
                        value={email}
                        disabled
                        className="mt-1 bg-gray-100"
                        placeholder="Email (cannot change here)"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-6">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSave}
                      className="bg-green-700 text-white hover:bg-green-800"
                    >
                      Save Changes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
