import AnnouncementTicker from "./AnnouncementTicker";
import Navbar from "./Navbar";

// Server component: static ticker + interactive (client) navbar.
export default function Header() {
  return (
    <>
      <AnnouncementTicker />
      <Navbar />
    </>
  );
}
