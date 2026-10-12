import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-gray-200 bg-white">
            <div className="container mx-auto flex flex-col gap-4 px-4 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between lg:px-8">

                {/* Left */}
                <div>
                    <p className="font-semibold text-gray-800">
                        বাজার দর
                    </p>

                    <p className="mt-1">
                        প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>
                </div>

                {/* Right */}
                <p className="text-left md:max-w-md md:text-right">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </p>

            </div>
        </footer>
    );
};

export default Footer;