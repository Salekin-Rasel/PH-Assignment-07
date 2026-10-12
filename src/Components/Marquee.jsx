import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    const data = await res.json();
    return (
      <div className="overflow-hidden">
            <MarqueeText
                duration={10}
                direction="right"
                className="bg-gray-200 py-3"
            >
                {data.map((item) => (
                    <Link href={`/ProductDetails/${item.id}`} key={item.id} className="mx-6 inline-flex items-center gap-2 whitespace-nowrap">
                    <span
                        key={item.id}
                        className="mx-6 inline-flex items-center gap-2 whitespace-nowrap hover:underline"
                    >
                        {/* Category Icon */}
                        <span>{item.categoryIcon}</span>

                        {/* Product Name */}
                        <span className="font-medium">
                            {item.nameBn}
                        </span>

                        {/* Price */}
                        <span>
                            {item.today} Tk/{item.unit}
                        </span>

                        {/* Price Change */}
                        <span
                            className={
                                item.change.dir === "up"
                                    ? "font-bold text-red-500"
                                    : item.change.dir === "down"
                                    ? "font-bold text-green-500"
                                    : "font-bold text-gray-500"
                            }
                        >
                            {item.change.dir === "up"
                                ? "▲"
                                : item.change.dir === "down"
                                ? "▼"
                                : "—"}
                        </span>

                        {/* Percentage */}
                        <span
                            className={
                                item.change.dir === "up"
                                    ? "text-red-500"
                                    : item.change.dir === "down"
                                    ? "text-green-500"
                                    : "text-gray-500"
                            }
                        >
                            {Math.abs(item.change.pct)}%
                        </span>
                    </span>
                    </Link>
                ))}
            </MarqueeText>
        </div>
    );
};

export default Marquee;