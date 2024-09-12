import ContactForm from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact John Roice Aldeza",
  openGraph: {
    title: "Contact | John Roice Aldeza",
    description: "Contact John Roice Aldeza",
    type: "article",
    images: [{ url: "https://johnroice.vercel.app/profile.png" }],
  },
};

function ContactPage() {
  return (
    <main className="my-16">
      <section className="text-center flex justify-center items-center">
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hi, Let&apos;s have a talk!
          </h1>
          <section className="text-lg my-6">
            <p>
              I would love to work with you, or just talk about great and
              innovative ideas!
            </p>
          </section>
          <section>
            <a href="mailto:jroicealdeza@gmail.com">
              <button className="btn btn-outline btn-accent btn-wide border-2">
                Mail me!
              </button>
            </a>
          </section>
          <hr className="my-8" />
          <section>
            <h5 className="font-bold">Or send a quick message!</h5>
            <ContactForm />
          </section>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
