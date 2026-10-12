import Link from "next/link";
import React from "react";

const AllProducts = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    const data = await res.json();

    return (
        <section className="container mx-auto px-4 py-8 lg:px-8">

            {/* Heading */}
            <div className="mb-5">
                <h2 className="text-2xl font-bold text-gray-800">
                    সব পণ্য
                </h2>

                <p className="text-sm text-gray-500">
                    আজকের বাজারের সব পণ্যের দাম
                </p>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {data.map((item) => (
                    <Link
                        href={`/ProductDetails/${item.id}`}
                        key={item.id}
                        className="rounded-xl border border-gray-200 bg-[#f8faf8] p-3 transition hover:-translate-y-1 hover:shadow-md"
                    >

                        {/* Product Top */}
                        <div className="flex items-center gap-3">

                            {/* Icon */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ef] text-xl">
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

                        {/* Price */}
                        <div className="mt-4 flex items-end justify-between">

                            <div>
                                <p className="text-[10px] text-gray-500">
                                    আজকের দাম
                                </p>

                                <p className="text-lg font-bold text-gray-800">
                                    {item.today} টাকা
                                </p>
                            </div>

                            {/* Price Change */}
                            <div
                                className={
                                    item.change.dir === "up"
                                        ? "rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-semibold text-red-500"
                                        : item.change.dir === "down"
                                        ? "rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600"
                                        : "rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-500"
                                }
                            >
                                {item.change.dir === "up"
                                    ? "▲"
                                    : item.change.dir === "down"
                                    ? "▼"
                                    : "—"}{" "}
                                {Math.abs(item.change.pct)}%
                            </div>

                        </div>

                    </Link>
                ))}

            </div>
        </section>
    );
};

export default AllProducts;