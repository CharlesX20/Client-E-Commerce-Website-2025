import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";

const categories = [
	{ href: "/products1#", name: "product1", imageUrl: "/product1.jpeg" },
	{ href: "/products2#", name: "product2", imageUrl: "/product3.jpeg" },
	{ href: "/products3#", name: "product3", imageUrl: "/product5.jpeg" },
	{ href: "/products4#", name: "product4", imageUrl: "/product7.jpeg" },
	{ href: "/products5#", name: "product5", imageUrl: "/product9.jpeg" },
	{ href: "/products6#", name: "product6", imageUrl: "/product2.jpeg" },
	{ href: "/products7#", name: "product7", imageUrl: "/product4.jpeg" },
];

const HomePage = () => {

	return (
		<div className="relative min-h-screen text-white overflow-hidden">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {/* Card-like translucent container so content reads over the shining yellow bg */}
    <div className="mx-auto max-w-6xl bg-black/50 backdrop-blur-sm rounded-2xl px-4 sm:px-8 py-10 sm:py-14">
      {/* Heading + enhanced red accent */}
      <div className="text-center mb-6">
        <h1 className="mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFED00] leading-tight">
          Explore All Our Products
        </h1>

        {/* COOLER red line: layered gradient + soft glow + subtle pulse (decorative only) */}
        <div className="mt-5 flex justify-center">
          <div className="relative w-36 sm:w-44 lg:w-56 h-2.5 rounded-full overflow-hidden">
            {/* base gradient bar */}
            <span
              className="absolute inset-0 block bg-gradient-to-r from-[#ED232A] via-[#FF8A00] to-[#ED232A] opacity-95"
              aria-hidden="true"
            />
            {/* soft outer glow */}
            <span
              className="absolute -inset-1.5 blur-xl opacity-30 bg-gradient-to-r from-[#ED232A] via-[#FF8A00] to-[#ED232A]"
              aria-hidden="true"
            />
            {/* subtle pulsing highlight (moves attention, decorative) */}
            <span
              className="absolute left-0 top-0 h-2.5 w-20 rounded-full mix-blend-screen opacity-80 animate-pulse"
              style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.35), rgba(255,255,255,0.06))" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <p className="text-center text-base sm:text-lg text-white/90 max-w-3xl mx-auto mb-12 px-2">
        Discover the latest arrivals in exotic spices and condiments, perfect for adding a pinch of flavor
        to your favorite dishes.
      </p>

      {/* Responsive grid — larger gaps on wider screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative rounded-lg overflow-hidden transform transition duration-300
                       hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(237,35,42,0.08)] focus-within:-translate-y-1"
            role="group"
          >
            {/* wrapper only — no new functional UI added */}
            <div className="flex flex-col h-full bg-gradient-to-b from-black/20 via-black/10 to-transparent p-4 sm:p-6">
              <div className="flex-1">
                <CategoryItem category={category} />
              </div>
            </div>

            {/* subtle pigment-red hover wash (purely decorative) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         bg-gradient-to-b from-transparent via-transparent to-[#ED232A]/6"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

	);
};
export default HomePage;