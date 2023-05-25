import Card from "@/components/techstack-card/card";
import html from "public/html.svg";
import css from "public/css-3.svg";
import js from "public/javascript.svg";
import tailwind from "public/tailwindcss-icon.svg";
import react from "public/react.svg";
import nextjs from "public/nextjs-icon.svg";
import firebase from "public/firebase.svg";
import java from "public/java.svg";
import spring from "public/spring-icon.svg";
import mysql from "public/mysql.svg";
import postgres from "public/postgresql.svg";
import figma from "public/figma.svg";

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
          <Card imageSrc={html} label="HTML" />
          <Card imageSrc={css} label="CSS" />
          <Card imageSrc={tailwind} label="Tailwind CSS" />
          <Card imageSrc={js} label="JavaScript" />
          <Card imageSrc={figma} label="Figma"/>
          <Card imageSrc={react} label="React" />
          <Card imageSrc={nextjs} label="NextJs" />
          <Card imageSrc={firebase} label="Firebase" />
          <Card imageSrc={java} label="Java" />
          <Card imageSrc={spring} label="Spring" />
          <Card imageSrc={mysql} label="MySQL" />
          <Card imageSrc={postgres} label="PostgreSQL" />
        </div>
      </section>
    </main>
  );
}
