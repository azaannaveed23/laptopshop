const messages = [
    "🔥 Special Offer: Free Windows Installation & Thermal Repasting with Every Laptop Purchase! | WhatsApp Now: +92 300 1234567",
    "💻 Corporate Bulk Orders Welcome — Special Rates for Software Houses & Call Centers",
    "🛡️ 7-Day Replacement Warranty on All Machines | 100% Genuine Hardware",
];
export default function AnnouncementTicker() {
    // First message repeats at the end so the -50% loop reads continuously
    const track = [...messages, messages[0]];
    return (<div className="bg-bblueDark text-white text-xs sm:text-sm font-semibold py-2.5 border-b border-blue-900 ticker-wrap">
      <div className="ticker-track">
        {track.map((text, i) => (<span key={i} className="mx-8">
            {text}
          </span>))}
      </div>
    </div>);
}
