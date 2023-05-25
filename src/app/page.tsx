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
import figma from "public/figma.png";

export default function Home() {
  return (
    <main className="container text-center prose lg:prose-xl">
      <section className="py-12">
        <div className="my-2 text-xl font-light">Hi, I&apos;m</div>
        <div className="my-2 text-4xl font-semibold">John Roice Aldeza</div>
        <div className="my-2 text-xl">I create web apps</div>
        <div className="mt-8 text-md">
          I am a fullstack developer, proficient in both backend and frontend,
          creating seamless user-centric applications with robust backend
          functionality and intuitive frontend design.
        </div>
      </section>
      <section className="py-2">
        <h3>Tech Stack</h3>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6">
          <TechstackCard imageSrc={html} label="HTML" altText="HTML"/>
          <TechstackCard imageSrc={css} label="CSS" altText="CSS"/>
          <TechstackCard imageSrc={tailwind} label="Tailwind CSS" altText="Tailwind CSS"/>
          <TechstackCard imageSrc={js} label="JavaScript" altText="JavaScript"/>
          <TechstackCard imageSrc={figma} label="Figma" altText="Figma"/>
          <TechstackCard imageSrc={react} label="React" altText="React"/>
          <TechstackCard imageSrc={nextjs} label="NextJs" altText="NextJs"/>
          <TechstackCard imageSrc={firebase} label="Firebase" altText="Firebase"/>
          <TechstackCard imageSrc={java} label="Java" altText="Java"/>
          <TechstackCard imageSrc={spring} label="Spring" altText="Spring"/>
          <TechstackCard imageSrc={mysql} label="MySQL" altText="MySQL"/>
          <TechstackCard imageSrc={postgres} label="PostgreSQL" altText="PostgreSQL"/>
        </div>
      </section>
      <section className="py-2">
        <h3>Projects</h3>
      </section>
    </main>
  );
}
