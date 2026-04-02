function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Beta Invite Button */}
      <a
        href="https://wa.me/919820011185?text=Hi%20Pekzho%2C%20I%20want%20to%20join%20the%20Beta%20Invite."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join Beta Invite"
        className="inline-flex items-center gap-2 rounded-full bg-[#895a06] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(137,90,6,0.25)] transition duration-300 hover:scale-105 hover:bg-[#6f4705]"
      >
        <span className="hidden sm:inline">Beta Invite</span>
      </a>

      {/* <a
        href="https://wa.me/919820011185"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#f1e5c8] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition duration-300 hover:scale-110 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
      >
        <img
          src="/logo/whatsapp.png"
          alt="WhatsApp"
          className="h-8 w-8 object-contain"
        />
      </a>

      <a
        href="https://t.me/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Telegram"
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#f1e5c8] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition duration-300 hover:scale-110 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
      >
        <img
          src="/logo/telegram.png"
          alt="Telegram"
          className="h-8 w-8 object-contain"
        />
      </a> */}
    </div>
  );
}

export default FloatingContact;