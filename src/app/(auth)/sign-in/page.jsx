"use client";

import { signIn } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";

export default function SignUpPage() {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: resData, error } = await signIn.email({
            
            email: data.email,
            password: data.password,
            remember: true, // Optional: Set to true if you want to remember the user
            callbackURL: "/", // Optional: Redirect URL after successful login
        });



        if (error) {
            alert(error.message);
            return;
        }

        alert("Login successful!");
    };

    return (
        <div className="min-h-screen bg-[#f1f6f1] px-4 py-8">

            {/* Heading */}
            <div className="mx-auto mb-5 max-w-md text-center">

                <h1 className="text-xl font-bold text-[#1d2b22]">
                    অ্যাকাউন্টে লগইন করুন
                </h1>

                <p className="mt-1 text-[10px] text-gray-500">
                    লগইন করে বাজারের বিস্তারিত তথ্য দেখুন।
                </p>

            </div>


            {/* Signup Card */}
            <Form
                className="mx-auto flex w-full max-w-md flex-col gap-3 rounded-xl border border-[#dfe7df] bg-[#ffffff] p-4 shadow-sm"
                onSubmit={onSubmit}
            >

               


                {/* Email */}
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>


                {/* Password */}
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>





                {/* Signup Button */}
                <div className="flex gap-2 justify-center">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>


                {/* Divider */}
                <div className="my-1 flex items-center gap-3">

                    <div className="h-px flex-1 bg-[#dfe7df]" />

                    <span className="text-[10px] text-gray-400">
                        অথবা
                    </span>

                    <div className="h-px flex-1 bg-[#dfe7df]" />

                </div>


                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-2">

                    <Button
                        type="button"
                        variant="secondary"
                        className="h-8 rounded-md border border-[#dfe7df] bg-white text-[10px] text-gray-700"
                    >
                        <span className="font-bold text-[#4285F4]">
                            G
                        </span>

                        Google দিয়ে চালিয়ে যান
                    </Button>


                    <Button
                        type="button"
                        variant="secondary"
                        className="h-8 rounded-md border border-[#dfe7df] bg-white text-[10px] text-gray-700"
                    >
                        <span className="font-bold text-black">
                            ◉
                        </span>

                        GitHub দিয়ে চালিয়ে যান
                    </Button>

                </div>


                {/* Login */}
                <p className="mt-1 w-full text-center text-[10px] text-gray-500">

                    অ্যাকাউন্ট নেই?

                    <Link
                        href="/sign-up"
                        className="ml-1 font-medium text-[#079447] hover:underline"
                    >
                        সাইন আপ করুন
                    </Link>

                </p>

            </Form>




        </div>
    );
}