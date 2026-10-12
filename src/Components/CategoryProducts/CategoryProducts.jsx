"use client";

import Link from "next/link";
import React, { useState } from "react";

const CategoryProducts = ({ data }) => {
    const [sort, setSort] = useState("low");

    const sortedData = [...data].sort((a, b) => {
        if (sort === "low") {
            return a.today - b.today;
        }

        if (sort === "high") {
            return b.today - a.today;
        }

        return 0;
    });

    return (
        <div className="mt-4 w-full">

            {/* Sort Bar */}
            <div className="mb-4 flex w-full justify-end rounded-2xl border border-gray-200 bg-white px-5 py-3">

                <div className="flex items-center gap-2">

                    <span className="text-sm text-gray-500">
                        সাজান
                    </span>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="select select-sm border-gray-300 bg-white text-gray-700"
                    >
                        <option value="low">
                            Price Low to High
                        </option>

                        <option value="high">
                            Price High to Low
                        </option>
                    </select>

                </div>

            </div>

            {/* Products */}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {sortedData.map((item) => (

                    <Link
                        href={`/ProductDetails/${item.id}`}
                        key={item.id}
                        className="w-full rounded-xl border border-gray-200 bg-[#f8faf8] p-4 transition hover:-translate-y-1 hover:shadow-md"
                    >

                        {/* Product */}
                        <div className="flex items-center gap-3">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef4ef] text-2xl">
                                {item.categoryIcon}
                            </div>

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
                        <div className="mt-5 flex items-end justify-between">

                            <div>
                                <p className="text-xs text-gray-500">
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
                                        ? "rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500"
                                        : item.change.dir === "down"
                                        ? "rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
                                        : "rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500"
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

        </div>
    );
};

export default CategoryProducts;