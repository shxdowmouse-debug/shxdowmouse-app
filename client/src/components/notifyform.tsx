"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function NotifyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        toast({
          title: "You're on the list!",
          description: "We'll email you as soon as we have updates.",
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send confirmation email.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl text-center text-white max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-1">You're on the list.</h2>
        <p className="text-white/70 text-sm">
          We’ll email you as soon as we have updates.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto"
    >
      <Input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        disabled={loading}
        className="w-full sm:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none backdrop-blur-md"
      />

      <Button
        type="submit"
        disabled={loading}
        className="
          h-14 px-8 rounded-2xl text-lg font-semibold 
          bg-white text-black hover:bg-white/90 transition-all shadow-md 
          w-full sm:w-auto whitespace-nowrap
        "
      >
        {loading ? "Sending..." : "Notify Me"}
      </Button>
    </form>
  );
}
