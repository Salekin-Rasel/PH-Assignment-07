import Link from "next/link";

const Navbar = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories",
        {
            cache: "force-cache",
        }
    );

    const navItems = await res.json();

    return (
        <div className="mt-8 mb-4 border-b-2 border-gray-200 p-4">
            <div className="container mx-auto flex gap-10">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        href={`/NavDetails/${item.id}`}
                        className="flex gap-2"
                    >
                        <p>{item.icon}</p>
                        <h2>{item.nameBn}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;