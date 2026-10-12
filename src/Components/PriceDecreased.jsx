import Link from "next/link";
import React from "react";

const PriceDecreased = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    const data = await res.json();

    // Only products whose price decreased
    const decreasedProducts = data
        .filter((item) => item.change.dir === "down")
        .slice(0, 6);

    return (
        <section className="container mx-auto px-4 py-10 lg:px-8">

            {/* Section Header */}
            <div className="mb-5 flex items-center gap-2">
                <span className="text-green-500">▼</span>

                <h2 className="text-2xl font-bold text-gray-800">
                    আজ দাম কমেছে
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {decreasedProducts.map((item) => (
                    <Link
                        href={`/ProductDetails/${item.id}`}
                        key={item.id}
                        className="rounded-xl border border-gray-200 bg-[#f8faf8] p-3 transition hover:-translate-y-1 hover:shadow-md"
                    >

                        {/* Product Information */}
                        <div className="flex items-center gap-3">

                            {/* Product Icon */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ef] text-2xl">
                                {item.categoryIcon}
                            </div>

                            {/* Product Name */}
                            <div>
                                <h3 className="font-bold text-gray-800">
                                    {item.nameBn}
                                </h3>

                                <p className="text-xs text-gray-500">
                                    প্রতি {item.unit}
                                </p>
                            </div>

                        </div>

                        {/* Price Information */}
                        <div className="mt-5 flex items-end justify-between">

                            {/* Today's Price */}
                            <div>
                                <p className="text-xs text-gray-500">
                                    আজকের দাম
                                </p>

                                <p className="text-xl font-bold text-gray-800">
                                    {item.today} টাকা
                                </p>
                            </div>

                            {/* Decrease Percentage */}
                            <div className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                                ▼ {Math.abs(item.change.pct)}%
                            </div>

                        </div>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default PriceDecreased;