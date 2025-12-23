import { useState } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xdanpdwv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto"
    >
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="w-full sm:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none backdrop-blur-md"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="h-14 px-8 rounded-2xl text-lg font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-md w-full sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Notify Me"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm">Thanks! You’ll be notified.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong.</p>
      )}
    </form>
  );
}
