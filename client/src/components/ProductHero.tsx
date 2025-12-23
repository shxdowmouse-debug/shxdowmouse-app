import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { NotifyForm } from "./notifyform";
// Adjust this import path and type to match your project
import type { Product } from "../types";

interface ProductHeroProps {
  product: Product;
  onBuyClick: () => void;
}

export function ProductHero({ product, onBuyClick }: ProductHeroProps) {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-black to-neutral-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT SIDE: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl w-full"
        >
          {/* CHANGE THIS TITLE TO WHAT YOU WANT */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            {product.name}
          </h1>

          <p className="text-lg text-white/70 mb-6">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
            <Button
              size="lg"
              className="h-14 px-8 rounded-2xl text-lg font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-lg"
              onClick={onBuyClick}
            >
              Buy now
            </Button>

            <NotifyForm />

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-2xl text-lg font-medium border-white/20 hover:bg-white/5 hover:text-white transition-all"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore features
            </Button>
          </div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative group w-full max-w-md"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl scale-75 group-hover:scale-90 transition-transform duration-700 opacity-50" />

          <div className="relative z-10 aspect-square flex items-center justify-center">
            <img
              // IMPORTANT: FIX THIS LINE
              // If your product has an image URL in data, use that:
              // src={product.imageUrl}
              // Otherwise, point to a real file in your public or assets folder:
              src={product.imageUrl ?? "/mouse-placeholder.png"}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:-translate-y-4 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
