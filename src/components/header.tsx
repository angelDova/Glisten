import WordMark from "@/components/word-mark";
import Navbar from "@/components/navbar";
import { createClient } from "@/prismicio";

export const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header>
      <Navbar settings={settings} />
    </header>
  );
};
