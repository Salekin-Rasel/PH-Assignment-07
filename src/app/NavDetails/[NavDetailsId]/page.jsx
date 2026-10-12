import CategoryProducts from "@/Components/CategoryProducts/CategoryProducts";
import React from "react";

const NavDetailsPage = async ({ params }) => {
    const { NavDetailsId } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products?category=${NavDetailsId}`
    );

    const data = await res.json();

    return (
        <div className="min-h-screen bg-[#f1f6f2] px-4 py-6 lg:px-8">

            <div className="container mx-auto">

                {/* Page Header */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5">

                    <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef4ef] text-2xl">
                            {data[0]?.categoryIcon}
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">
                                {data[0]?.categoryNameBn}
                            </h1>

                            <p className="text-sm text-gray-500">
                                {data.length} টি পণ্যের আজকের দাম ও পরিবর্তন
                            </p>
                        </div>

                    </div>

                </div>

                {/* Products */}
                <CategoryProducts data={data} />

            </div>

        </div>
    );
};

export default NavDetailsPage;