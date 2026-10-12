"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const date = new Date();

        const formatted = date.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        const timer = setTimeout(() => {
            setFormattedDate(formatted);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gray-100 shadow-md">
            <div className="container mx-auto flex justify-between p-4">
                <Link href="/" className="flex gap-2">
                    <div className="rounded-lg bg-green-700 p-2">
                        <Image
                            height={40}
                            width={40}
                            src="/logo-icon.png"
                            alt="Logo"
                        />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Bazar Dor
                        </h1>

                        <p className="text-sm">
                            {formattedDate}
                        </p>
                    </div>
                </Link>

                <div className="flex items-center gap-2">
                    <Link href="/sign-in">
                        <button className="font-medium">
                            Sign In
                        </button>
                    </Link>

                    <Link href="/sign-up">
                        <button className="btn btn-success">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
