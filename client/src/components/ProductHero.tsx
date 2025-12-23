import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { NotifyForm } from "./notifyform";
import type { Product } from "../types";

interface ProductHeroProps {
  product: Product;
  onBuyClick: () => void;
}

export function ProductHero({ product, onBuyClick }: ProductHeroProps) {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-black to-neutral-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            THE DARKER SIDE OF PRECISION
          </h1>

          <p className="text-lg text-white/70 mb-8 max-w-xl">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <NotifyForm />

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-2xl text-lg font-medium border-white/10 hover:bg-white/5 hover:text-white transition-all"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Features
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="relative group mt-20 mx-auto w-full max-w-xl"
        >
          {/* Decorative circle */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl scale-75 group-hover:scale-90 transition-transform duration-700 opacity-50" />

          <div className="relative z-10 aspect-square flex items-center justify-center">
            <img
              src="Copilot_20251128_154313"
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:-translate-y-4 transition-transform duration-500 rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
