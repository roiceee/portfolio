function ContactPage() {
  return (
    <main className="my-32">
      <section className="text-center flex justify-center items-center">
        <div className="">
          <h1 className="text-3xl md:text-4xl mb-8 font-bold">
            Hi, Let&apos;s have a talk!
          </h1>
          <div className="text-lg">
            <p>
              I would love to work with you, or just talk about great and
              innovative ideas!
            </p>
            <p>
              <b>Feel free to reach me out.</b>
            </p>
          </div>
          <div className="mt-12">
            <a href="mailto:jroicealdeza@gmail.com">
              <button className="btn btn-outline btn-accent btn-wide border-2">
                Contact me!
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
