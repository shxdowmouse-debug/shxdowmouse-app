import { useState } from "react";

export default function NotifyForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Tell Web3Forms not to redirect
    formData.append("redirect", "none");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
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
      <input
        type="hidden"
        name="access_key"
        value="67505ea0-d8b2-40cd-accf-6533b9c37952"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        className="w-full sm:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none backdrop-blur-md"
      />

      <button
        type="submit"
        className="
          h-14 px-8 rounded-2xl text-lg font-semibold 
          bg-white text-black hover:bg-white/90 transition-all shadow-md 
          w-full sm:w-auto whitespace-nowrap
        "
      >
        Notify Me
      </button>
    </form>
  );
}
