function ContactPage() {
  return (
    <main>
      <section className="py-24 text-center">
        <h1 className="text-primary text-3xl md:text-4xl mb-8">
          Hi, Let&apos;s have a talk!
        </h1>
        <div className="mt-6 text-lg">
          <p>
            I would love to work with you, or just talk about great and innovative
            ideas!
          </p>
          <p>
            Feel free to reach me out anytime.
          </p>
        </div>
        <div className="mt-12">
          <a href="mailto:jroicealdeza@gmail.com">
            <button className="btn btn-outline btn-accent btn-wide">
              Contact me!
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
