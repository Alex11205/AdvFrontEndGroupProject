import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero
        title="OUR GUIDES. YOUR STORIES."
        subtitle=""
        backgroundImage="/images/background1.webp"
      />

      <main className="w-full text-black">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 overflow-hidden ">
          <div className="relative h-[420px] md:h-[520px] overflow-hidden group">
            <Image
              src="/images/background4.webp"
              alt="background4"
              fill
              priority
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105 transition"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-5xl font-bold">
                  BEST IN TRAVEL 2026
                </h2>
              </div>
            </div>

            <div className="relative h-[420px] md:h-[520px] overflow-hidden group">
            <Image
              src="/images/background6.webp"
              alt="background6"
              fill
              priority
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105 transition"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
      
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-5xl font-bold">
                  PROTECT YOUR TRAVEL ADVENTURES
                </h2>
              </div>
            </div>

      
        </div>
      </main>
      
    </div>
  );
}