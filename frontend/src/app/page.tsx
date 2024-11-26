import PageSection from "@/components/containers/page-section";
import SocialLink from "@/components/footer/social-link";
import CertificationsTab from "@/components/skills-and-exp/certifications-tab";
import CommunityTab from "@/components/skills-and-exp/community-tab";
import ExperienceTab from "@/components/skills-and-exp/experience-tab";
import ProjectsTab from "@/components/skills-and-exp/projects-tab";
import TechstackTab from "@/components/skills-and-exp/techstack-tab";
import type { Metadata } from "next";
import Image from "next/image";
import mail from "public/envelope.svg";
import github from "public/github.svg";
import linkedin from "public/linkedin.svg";
import profile from "public/profile.png";

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
    title: "John Roice Aldeza",
    description:
      "Fullstack Developer | I like digging into the nitty-gritty of backend functions and making user interface that just make sense.",
    type: "profile",
    images: [{ url: "https://johnroice.vercel.app/profile.png" }],
  },
};

export default function Page() {
  return (
    <main className="text-center">
      <section className="my-5 sm:my-10 md:my-24 lg:my-28 flex flex-col justify-center">
        <div className="flex flex-col items-center lg:flex-row-reverse lg:gap-32 lg:justify-between">
          <div>
            <Image
              src={profile}
              alt="profile picture"
              width={280}
              height={280}
              className={
                "h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] border-4 rounded-md border-black"
              }
            />
          </div>

          <div className="mt-4 lg:mt-0 lg:text-left">
            <div className="my-2 text-3xl md:text-4xl lg:text-5xl font-bold">
              John Roice Aldeza
            </div>
            <div className="my-2 text-lg md:text-xl lg:text-2xl text-accent font-semibold">
              Fullstack Developer
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-md sm:text-lg md:text-xl md:text-left">
          <b>Hello there! I&apos;m Roice,</b> a curious developer who just likes
          to build stuff. I like digging into the nitty-gritty of backend
          functions and making user interface that just make sense. Let&apos;s
          team up and build some awesome stuff together!
        </div>
        <div className="mt-12">
          <a href={"/resume-aldeza.pdf"} target="_blank">
            <button className=" btn btn-accent btn-wide font-bold border-2 text-lg btn-lg">
              View Resume
            </button>
          </a>
        </div>
        <div className="mt-8 flex justify-center items-center gap-6">
          <SocialLink
            link="https://www.linkedin.com/in/johnroicealdeza"
            imageSrc={linkedin}
            altText="linkedIn"
            size={35}
          />
          <SocialLink
            link="https://www.github.com/roiceee"
            imageSrc={github}
            altText="github"
            size={35}
          />
          <SocialLink
            link="mailto:jroicealdeza@gmail.com"
            imageSrc={mail}
            altText="mail"
            size={35}
          />
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
            <button className="btn btn-outline btn-accent btn-wide px-6 border-2">
              Mail me!
            </button>
          </a>
        </div>
      </PageSection>
    </main>
  );
}
