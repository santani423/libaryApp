"use client";

import Image from "next/image";

import Avatar from "@/assets/icon/icon1.svg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function Profile() {
  const profileData = [
    { label: "Name", value: "Johndoe" },
    { label: "Email", value: "johndoe@email.com" },
    { label: "Nomor Handphone", value: "081234567890" },
  ];

  return (
    <Card className="max-w-2xl rounded-2xl border-gray-200 shadow-none">
      <CardContent className="space-y-5 p-4">
        <h2 className="text-base font-semibold text-gray-900">Profile</h2>

        <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-4">
          <Image
            src={Avatar}
            alt="Profile avatar"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="space-y-3">
            {profileData.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 text-sm">
                <span className="text-gray-600">{item.label}</span>
                <span className="font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>

          <Button className="h-9 w-full rounded-full bg-primary text-white hover:bg-primary/90">
            Update Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
