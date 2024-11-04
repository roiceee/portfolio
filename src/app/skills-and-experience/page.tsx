import Tabs from "@/components/skills-and-exp/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Experience",
  description:
    "Have a look at my tech portfolio.",
  keywords: [
    "Skills",
    "Experience",
    "Fullstack Developer",
    "Web Developer",
    "Software Engineer",
    "John Roice Aldeza",
    "Developer",
    "Freelance",
    "Freelance Developer",
  ],
  openGraph: {
    title: "Skills & Experience | John Roice Aldeza",
    description:
      "Skills and experience of John Roice Aldeza, a Fullstack Developer.",
    type: "profile",
    images: [{ url: "https://johnroice.vercel.app/profile.png" }],
  },
};

export default function Page() {
  return (
    <div>
      <section className="prose my-10">
        <h1>Skills & Experience</h1>
      </section>
      <Tabs />
    </div>
  );
}
