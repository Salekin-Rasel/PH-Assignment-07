import Image from 'next/image';
import React from 'react';

const HeroPage = () => {

    const date = new Date();

    const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (
        <div className="container mx-auto px-4 py-10 lg:px-8 lg:py-16">
    <div className="flex flex-col items-center justify-between gap-10 rounded-3xl bg-[#f3f8f3] p-6 shadow-sm md:p-10 lg:flex-row lg:p-14">

        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">

            {/* Date */}
            <p className="mb-5 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
                📅 {formattedDate}
            </p>

            {/* Heading */}
            <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                আজকের বাজারের দাম
                <span className="block text-green-600">
                    এক নজরে
                </span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* Button */}
            <button className="btn btn-success rounded-full px-7 text-base text-white shadow-md">
                সব পণ্য দেখুন →
            </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:w-1/2">
            <Image
                src="/bazar-hero.png"
                alt="Bazar products"
                width={500}
                height={300}
                className="w-full max-w-md object-contain drop-shadow-xl"
            />
        </div>

    </div>
</div>
    );
};

export default HeroPage;