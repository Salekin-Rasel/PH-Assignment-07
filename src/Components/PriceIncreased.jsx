import Link from "next/link";
import React from "react";

const PriceIncreased = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    const data = await res.json();

    // Only products whose price increased
    const increasedProducts = data
        .filter((item) => item.change.dir === "up")
        .slice(0, 6);

    return (
        <section className="container mx-auto px-4 py-10 lg:px-8">

            {/* Section Header */}
            <div className="mb-5 flex items-center gap-2">
                <span className="text-red-500">▲</span>

                <h2 className="text-2xl font-bold text-gray-800">
                    আজ দাম বেড়েছে
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {increasedProducts.map((item) => (
                    <Link href={`/ProductDetails/${item.id}`}
                        key={item.id}
                        className="rounded-xl border border-gray-200 bg-[#f8faf8] p-3 transition hover:-translate-y-1 hover:shadow-md"
                    >

                        {/* Top */}
                        <div className="flex items-center justify-between">

                            {/* Product */}
                            <div className="flex items-center gap-3">

                                {/* Icon */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ef] text-2xl">
                                    {item.categoryIcon}
                                </div>

                                {/* Name */}
                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        {item.nameBn}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        প্রতি {item.unit}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="mt-5 flex items-end justify-between">

                            {/* Price */}
                            <div>
                                <p className="text-xs text-gray-500">
                                    আজকের দাম
                                </p>

                                <p className="text-xl font-bold text-gray-800">
                                    {item.today} টাকা
                                </p>
                            </div>

                            {/* Percentage */}
                            <div className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500">
                                ▲ {item.change.pct}%
                            </div>

                        </div>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default PriceIncreased;