"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { NotifyForm } from "./NotifyForm";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "./ui/dialog";

import type { Product } from "../types";

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative w-full py-52 overflow-hidden bg-gradient-to-b from-black to-neutral-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT SIDE: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl w-full pl-6 lg:pl-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            {product?.name}
          </h1>

          <p className="text-lg text-white/70 mb-6">
            {product?.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">

            {/* Notify Me Popup */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-2xl text-lg font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-lg"
                >
                  Notify Me
                </Button>
              </DialogTrigger>

              <DialogContent className="bg-neutral-900 border border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle>Get notified</DialogTitle>
                  <DialogDescription>
                    Enter your email address and we’ll let you know as soon as it’s available.
                  </DialogDescription>
                </DialogHeader>

                <NotifyForm />
              </DialogContent>
            </Dialog>

            {/* Explore Features */}
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-2xl text-lg font-medium border-white/20 hover:bg-white/5 hover:text-white transition-all"
              onClick={() =>
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
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
          className="relative group w-full max-w-2xl lg:ml-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl scale-75 group-hover:scale-90 transition-transform duration-700 opacity-50" />

          <div className="relative z-10 aspect-auto flex items-center justify-center">
            <img
              src={product?.imageUrl ?? "/mouse-placeholder.png"}
              alt={product?.name ?? "Product image"}
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:-translate-y-4 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
