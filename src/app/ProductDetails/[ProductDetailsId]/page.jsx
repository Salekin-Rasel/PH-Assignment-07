import React from "react";

const ProductDetailPage = async ({ params }) => {
    const { ProductDetailsId } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products/${ProductDetailsId}`
    );

    const data = await res.json();

    return (
        <div className="min-h-screen bg-[#f1f6f2] px-4 py-5 lg:px-8">

            <div className="container mx-auto">

                {/* Breadcrumb */}
                <div className="mb-5 flex items-center gap-2 text-xs text-gray-500">
                    <span>হোম</span>
                    <span>›</span>
                    <span>{data.categoryNameBn}</span>
                    <span>›</span>
                    <span className="text-gray-700">
                        {data.nameBn}
                    </span>
                </div>

                {/* Product Header */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5">

                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                        {/* Product Info */}
                        <div className="flex items-center gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eef4ef] text-3xl">
                                {data.image}
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {data.nameBn}
                                </h1>

                                <p className="text-xs text-gray-500">
                                    প্রতি {data.unit}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    আজকের বাজারের দাম ও পরিবর্তন
                                </p>
                            </div>

                        </div>

                        {/* Current Price */}
                        <div className="rounded-xl bg-[#f1f6f2] px-5 py-3 text-right">

                            <p className="text-xs text-gray-500">
                                আজকের দাম
                            </p>

                            <p className="text-2xl font-bold text-gray-800">
                                {data.today} টাকা
                            </p>

                            <p
                                className={
                                    data.change.dir === "up"
                                        ? "text-xs font-semibold text-red-500"
                                        : data.change.dir === "down"
                                        ? "text-xs font-semibold text-green-600"
                                        : "text-xs font-semibold text-gray-500"
                                }
                            >
                                {data.change.dir === "up"
                                    ? "▲"
                                    : data.change.dir === "down"
                                    ? "▼"
                                    : "—"}{" "}
                                {Math.abs(data.change.pct)}%
                            </p>

                        </div>

                    </div>

                </div>

                {/* Price Summary */}
                <div className="mt-5">

                    <h2 className="mb-3 text-lg font-bold text-gray-800">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                        {/* Today */}
                        <div className="rounded-xl border border-gray-200 bg-white p-4">
                            <p className="text-xs text-gray-500">
                                আজকের দাম
                            </p>

                            <p className="mt-1 text-xl font-bold text-green-600">
                                {data.today} টাকা
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                প্রতি {data.unit}
                            </p>
                        </div>

                        {/* Yesterday */}
                        <div className="rounded-xl border border-gray-200 bg-white p-4">
                            <p className="text-xs text-gray-500">
                                গতকালের দাম
                            </p>

                            <p className="mt-1 text-xl font-bold text-red-500">
                                {data.yesterday} টাকা
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                প্রতি {data.unit}
                            </p>
                        </div>

                        {/* Last Week */}
                        <div className="rounded-xl border border-gray-200 bg-white p-4">
                            <p className="text-xs text-gray-500">
                                গত সপ্তাহের দাম
                            </p>

                            <p className="mt-1 text-xl font-bold text-gray-800">
                                {data.lastWeek} টাকা
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                প্রতি {data.unit}
                            </p>
                        </div>

                    </div>

                </div>

                {/* Market Prices */}
                <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-4">

                    <h2 className="mb-4 text-lg font-bold text-gray-800">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[600px] border-collapse text-sm">

                            {/* Table Header */}
                            <thead>
                                <tr className="border-b border-gray-200 text-left text-gray-500">

                                    <th className="px-3 py-3 font-medium">
                                        বাজার
                                    </th>

                                    <th className="px-3 py-3 font-medium">
                                        বিভাগ
                                    </th>

                                    <th className="px-3 py-3 text-right font-medium">
                                        সর্বনিম্ন
                                    </th>

                                    <th className="px-3 py-3 text-right font-medium">
                                        সর্বোচ্চ
                                    </th>

                                    <th className="px-3 py-3 text-right font-medium">
                                        গড়
                                    </th>

                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>

                                {data.markets.map((market, index) => {

                                    const average = Math.round(
                                        (market.min + market.max) / 2
                                    );

                                    return (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-200 last:border-none hover:bg-[#f8faf8]"
                                        >

                                            <td className="px-3 py-3 font-medium text-gray-700">
                                                {market.market}
                                            </td>

                                            <td className="px-3 py-3 text-gray-500">
                                                {market.division}
                                            </td>

                                            <td className="px-3 py-3 text-right text-gray-700">
                                                {market.min} টাকা
                                            </td>

                                            <td className="px-3 py-3 text-right text-gray-700">
                                                {market.max} টাকা
                                            </td>

                                            <td className="px-3 py-3 text-right font-medium text-gray-800">
                                                {average} টাকা
                                            </td>

                                        </tr>
                                    );
                                })}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetailPage;