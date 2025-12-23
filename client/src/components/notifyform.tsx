export default function NotifyForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto"
    >
      {/* Web3Forms Access Key */}
      <input
        type="hidden"
        name="access_key"
        value="67505ea0-d8b2-40cd-accf-6533b9c37952"
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        className="w-full sm:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none backdrop-blur-md"
      />

      {/* Submit Button */}
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
