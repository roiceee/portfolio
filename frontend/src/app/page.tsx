import PageSection from "@/components/containers/page-section";
import SocialLink from "@/components/footer/social-link";
import CertificationsTab from "@/components/skills-and-exp/certifications-tab";
import CommunityTab from "@/components/skills-and-exp/community-tab";
import ExperienceTab from "@/components/skills-and-exp/experience-tab";
import ProjectsTab from "@/components/skills-and-exp/projects-tab";
import TechstackTab from "@/components/skills-and-exp/techstack-tab";
import type { Metadata } from "next";
import Image from "next/image";
import mail from "/public/envelope.svg";
import github from "/public/github.svg";
import linkedin from "/public/linkedin.svg";
import profile from "/public/profile.png";

//export metadata

export const metadata: Metadata = {
  title: {
    absolute: "John Roice Aldeza",
  },
  description:
    "Fullstack Developer | I like digging into the nitty-gritty of backend functions and making user interface that just make sense.",
  keywords: [
    "Fullstack Developer",
    "Web Developer",
    "Software Engineer",
    "John Roice Aldeza",
    "Developer",
    "Freelance",
    "Freelance Developer",
  ],
  openGraph: {
    title: "John Roice Aldeza - Fullstack Developer",
    description:
      "Fullstack Developer | I like digging into the nitty-gritty of backend functions and making user interface that just make sense.",
    type: "website",
    url: "https://johnroice.vercel.app",
    siteName: "John Roice Aldeza Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://johnroice.vercel.app/profile.png",
        width: 280,
        height: 280,
        alt: "John Roice Aldeza - Fullstack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Roice Aldeza - Fullstack Developer",
    description:
      "Fullstack Developer | I like digging into the nitty-gritty of backend functions and making user interface that just make sense.",
    images: ["https://johnroice.vercel.app/profile.png"],
  },
};

export default function Page() {
  return (
    <main className="text-center">
      <section className="my-10 md:my-20 lg:my-28 flex flex-col items-center text-center lg:text-left">
        <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row lg:gap-16">
          {/* Profile Text */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-5xl font-bold">
              John Roice Aldeza
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-accent mt-2">
              Fullstack Developer
            </h2>
            <p className="mt-6 lg:mt-12 text-md sm:text-lg md:text-xl leading-relaxed">
              <b>Hey, Roice here,</b> I build for the love of tech. I&apos;m a
              software developer based in the Philippines. Oftentimes, I speak
              at tech workshops as I like to teach. Big fan of the Fallout
              franchise.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 lg:mt-16 flex flex-col lg:flex-row gap-4 sm:gap-6">
              <a href="/resume-aldeza.pdf" target="_blank">
                <button className="btn btn-accent font-bold border-2 text-lg btn-lg px-20">
                  View Resume
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center lg:justify-start gap-6">
              <SocialLink
                link="https://www.linkedin.com/in/johnroicealdeza"
                imageSrc={linkedin}
                altText="LinkedIn"
                size={35}
              />
              <SocialLink
                link="https://www.github.com/roiceee"
                imageSrc={github}
                altText="GitHub"
                size={35}
              />
              <SocialLink
                link="mailto:jroicealdeza@gmail.com"
                imageSrc={mail}
                altText="Email"
                size={35}
              />
            </div>
          </div>

          {/* Profile Image */}
          <div className="mb-6 lg:mb-0">
            <Image
              src={profile}
              alt="profile picture"
              width={280}
              height={280}
              className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] border-4 rounded-md border-black shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="xl:grid grid-cols-2 gap-12">
        <div className="py-16 prose text-left mx-auto max-w-none">
          <ExperienceTab />
        </div>
        <div className="py-16 prose text-left mx-auto max-w-none">
          <CertificationsTab />
        </div>
      </div>

      <div className="xl:grid grid-cols-2 gap-12">
        <div className="py-16 prose text-left mx-auto max-w-none">
          <ProjectsTab />
        </div>
        <div className="py-16 prose text-left mx-auto max-w-none">
          <CommunityTab isPreview />
        </div>
      </div>

      <div className="py-16 prose text-left mx-auto max-w-none">
        <TechstackTab />
      </div>

      <PageSection className="py-20 pb-28" title="Let's build your ideas!">
        <p className="text-lg">
          Feel free to reach me out anytime. I would be happy to collaborate
          with you.
        </p>
        <div className="mt-8">
          <a href="mailto:jroicealdeza@gmail.com">
            <button className="btn btn-accent btn-wide px-6 border-2">
              Mail me!
            </button>
          </a>
        </div>
      </PageSection>
    </main>
  );
}
