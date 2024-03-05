import phraseapi from "public/phraseapi.png";
import organize from "public/organize.png";
import ProjectCard from "@/components/card/project-card";
import PageContainer from "@/components/containers/page-container";
import SocialLink from "@/components/footer/social-link";
import linkedin from "public/linkedin.svg";
import github from "public/github.svg";
import mail from "public/envelope.svg";
import gdsc from "public/gdsc.png";
import profile from "public/profile.png";
import Link from "next/link";
import PageSection from "@/components/containers/page-section";
import Image from "next/image";
import ExperienceCard from "@/components/card/experience-card";
import postman from "public/postman.png";
import TechStack from "@/components/techstack-card/techstack";
import riffrant from "public/riffrant.png";
import style from "./image.module.css";

export default function Home() {
  return (
    <main className="text-center">
        <section className="my-5 sm:my-10 md:my-24 lg:my-28 flex flex-col justify-center">
          <div className="flex flex-col items-center md:flex-row-reverse md:gap-32 md:justify-between">
            <div>
              <Image
                src={profile}
                alt="profile picture"
                width={220}
                height={220}
                className={style.profileImage}
              />
            </div>

            <div className="mt-4 md:mt-0 md:text-left">
              <div className="my-2 text-3xl md:text-4xl lg:text-5xl font-bold">
                John Roice Aldeza
              </div>
              <div className="my-2 text-lg md:text-xl lg:text-2xl text-accent font-semibold">
                Fullstack Developer
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-md md:text-lg md:text-left">
            <b>Hello there! I&apos;m Roice,</b> a curious developer who just
            likes to build stuff. I like digging into the nitty-gritty of
            backend functions and making user interface that just make sense.
            Let&apos;s team up and build some awesome stuff together!
          </div>
          <div className="mt-12">
            <a href={"/cv_JohnRoiceAldeza.pdf"} target="_blank">
              <button className=" btn btn-outline btn-accent btn-wide font-bold border-2">
                View Curriculum Vitae
              </button>
            </a>
          </div>
          <div className="mt-8 flex justify-center items-center gap-6">
            <SocialLink
              link="https://www.linkedin.com/in/johnroicealdeza"
              imageSrc={linkedin}
              altText="linkedIn"
              size={30}
            />
            <SocialLink
              link="https://www.github.com/roiceee"
              imageSrc={github}
              altText="github"
              size={30}
            />
            <SocialLink
              link="mailto:jroicealdeza@gmail.com"
              imageSrc={mail}
              altText="mail"
              size={30}
            />
          </div>
        </section>

        <PageSection className="py-16" title="Projects">
          <div className="grid md:grid-cols-2 gap-3">
            <ProjectCard
              imageSrc={riffrant}
              title="Riffrant"
              description="Social media application to express your opinions. "
              altText="Riffrant"
              demoLink="https://riffrant.vercel.app"
              repoLink="https://github.com/roiceee/riffrant"
            />
            <ProjectCard
              imageSrc={organize}
              title="Organize"
              description="Task management progressive web application (PWA), accessible through web, desktop, and mobile."
              altText="Organize"
              demoLink="https://organizeapp.vercel.app"
              repoLink="https://github.com/roiceee/organize"
            />
            <div className="md:col-span-2 flex justify-center">
              <ProjectCard
                imageSrc={phraseapi}
                title="Phrase API"
                description="Share and look up for text-related data, and has exposed REST API endpoints
                 for integrating with your applications."
                altText="Phrase API"
                demoLink="https://phraseapi.vercel.app"
                repoLink="https://github.com/roiceee/phrase-api-client"
              />
            </div>
          </div>
          <div className="text-accent text-lg mt-4 hover:underline">
            <Link href="https://github.com/roiceee" target="_blank">
              See more projects on GitHub.
            </Link>
          </div>
        </PageSection>

        <PageSection
          title="Community Leadership Experience"
          className="py-20 flex flex-col gap-4"
        >
          <ExperienceCard
            imageNode={
              <Image src={gdsc} alt="GDSC" width={60} placeholder="blur" />
            }
            title="Google Developer Student Clubs USeP Lead"
            year="2023-2024"
            expand={
              <div className="text-start prose text-sm">
                <div>
                  I became the Google DSC Lead of University of Southeastern
                  Philippines. This leadership role allowed me to cultivate a
                  passion for technology and collaboration, and it played a
                  pivotal part in my journey in tech.
                </div>
                <ul>
                  <li>
                    <b className="text-accent">Team Leadership:</b> I led a team
                    of driven students, fostering a culture of innovation and
                    teamwork. Together, we embarked on a variety of projects,
                    from web and mobile app development to machine learning and
                    AI initiatives.
                  </li>
                  <li>
                    <b className="text-accent">Technical Workshops:</b>{" "}
                    Organized and conducted technical workshops and seminars to
                    empower club members with the latest industry knowledge and
                    hands-on experience.
                  </li>
                  <li>
                    <b className="text-accent">Community Engagement:</b>{" "}
                    Nurtured a vibrant tech community within USeP by organizing
                    hackathons, coding competitions, and tech talks.
                  </li>
                  <li>
                    <b className="text-accent">Collaboration:</b> Worked closely
                    with industry partners and organizations to bring projects
                    and insights to club members.
                  </li>
                </ul>
              </div>
            }
          />

          <ExperienceCard
            imageNode={
              <Image
                src={postman}
                alt="Postman Student Leader"
                width={60}
                placeholder="blur"
              />
            }
            title="Postman Student Leader"
            year="2023-2024"
            expand={
              <div className="text-start prose text-sm">
                <div>
                  Being a Postman Student Leader, I was able to share my
                  knowledge and passion for API development and testing to
                  fellow students. I also learned a lot about API development
                  and testing, and how it can help developers build better
                  software.
                </div>
                <ul>
                  <li>
                    <b className="text-accent">Technical Workshops:</b>{" "}
                    Organized and conducted API development and testing
                    workshops to empower students with the latest industry
                    knowledge and hands-on experience.
                  </li>
                  <li>
                    <b className="text-accent">Study Jams:</b> Collaborated with
                    fellow Postman Student Leaders to conduct study jams and
                    share our knowledge and passion for API development and
                    testing.
                  </li>
                </ul>
              </div>
            }
          />
        </PageSection>

        <PageSection className="py-20" title="Used Technologies">
          <TechStack />
        </PageSection>

        <PageSection className="py-20 pb-28" title="Let's build your ideas!">
          <p className="text-lg">
            Feel free to reach me out anytime. I would be happy to collaborate
            with you.
          </p>
          <div className="mt-8">
            <a href="mailto:jroicealdeza@gmail.com">
              <button className="btn btn-outline btn-accent btn-wide px-6 border-2">
                Contact me!
              </button>
            </a>
          </div>
        </PageSection>
    </main>
  );
}