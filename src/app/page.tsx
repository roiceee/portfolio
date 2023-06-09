import TechstackCard from "@/components/techstack-card/techstack-card";
import html from "public/html.png";
import css from "public/css-3.png";
import js from "public/javascript.png";
import tailwind from "public/tailwindcss-icon.png";
import react from "public/react.png";
import nextjs from "public/nextjs-icon.png";
import firebase from "public/firebase.png";
import java from "public/java.png";
import spring from "public/spring-icon.png";
import mysql from "public/mysql.png";
import postgres from "public/postgresql.png";
import bootstrap from "public/bootstrap.png";
import phraseapi from "public/phraseapi.png";
import organize from "public/organize.png";
import ProjectCard from "@/components/project-card/project-card";
import PageContainer from "@/components/containers/page-container";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <PageContainer className="text-center">
        <section className="py-28">
          <div className="my-2 text-2xl font-light text-primary">
            Hi, I&apos;m
          </div>
          <div className="my-2 text-4xl md:text-6xl font-bold text-accent">
            John Roice Aldeza
          </div>
          <div className="my-2 text-2xl text-primary">I create web apps</div>
          <div className="mt-8 text-md lg:text-lg text-primary">
            I am a fullstack developer, proficient in both backend and frontend,
            creating seamless user-centric applications with robust backend
            functionality and intuitive frontend design.
          </div>
        </section>
        <section className="py-12">
          <h3 className="text-4xl mb-8 text-secondary">Tech Stack</h3>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            <TechstackCard imageSrc={html} label="HTML" altText="HTML" />
            <TechstackCard imageSrc={css} label="CSS" altText="CSS" />
            <TechstackCard
              imageSrc={tailwind}
              label="Tailwind CSS"
              altText="Tailwind CSS"
            />
            <TechstackCard
              imageSrc={bootstrap}
              label="Bootstrap"
              altText="Bootstrap"
            />
            <TechstackCard
              imageSrc={js}
              label="JavaScript"
              altText="JavaScript"
            />
            <TechstackCard imageSrc={react} label="React" altText="React" />
            <TechstackCard imageSrc={nextjs} label="NextJs" altText="NextJs" />
            <TechstackCard
              imageSrc={firebase}
              label="Firebase"
              altText="Firebase"
            />
            <TechstackCard imageSrc={java} label="Java" altText="Java" />
            <TechstackCard imageSrc={spring} label="Spring" altText="Spring" />
            <TechstackCard imageSrc={mysql} label="MySQL" altText="MySQL" />
            <TechstackCard
              imageSrc={postgres}
              label="PostgreSQL"
              altText="PostgreSQL"
            />
          </div>
        </section>
        <section className="py-12">
          <h3 className="text-4xl mb-8 text-secondary">Projects</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <ProjectCard
              imageSrc={organize}
              title="Organize"
              description="Task management progressive web application (PWA) written in React and Firebase."
              altText="Organize"
              link="https://organizeapp.vercel.app"
            />
            <ProjectCard
              imageSrc={phraseapi}
              title="Phrase API"
              description="REST API created using Spring Boot that allows you to get text-related data that can be used for frontend applications."
              altText="Phrase API"
              link="https://phraseapi.vercel.app"
            />
          </div>
        </section>
        <section className="py-12 pb-24">
          <h3 className="text-4xl mb-8 text-secondary">
            Let&apos;s build your ideas!
          </h3>
          <p>
            Feel free to reach me out anytime. I would be happy to collaborate
            with you.
          </p>
          <div className="mt-8">
            <a href="mailto:jroicealdeza@gmail.com">
              <button className="btn btn-accent btn-outline btn-wide px-6 border-2">
                Contact me!
              </button>
            </a>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
