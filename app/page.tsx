// app/page.tsx
import HeroSection from "./components/HeroSection";
import SendToWebhook from "./components/SendToWebhook";

export default function Home() {
  return (
    <div>
      <SendToWebhook />
      <HeroSection />
    </div>
  );
}
