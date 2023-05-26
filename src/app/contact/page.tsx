function ContactPage() {
  return (
    <main>
      <div className="py-24 flex flex-col justify-center items-center">
        <h1 className="text-primary text-center text-3xl mb-8">
          Hi, Let&apos;s have a talk!
        </h1>
        <form>
          <div className="lg:flex justify-center gap-6">
            <div>
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="input input-bordered input-primary input-lg w-full"
                id="name"
              />
            </div>
            <div>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="input input-bordered input-primary input-lg w-full"
                id="email"
              />
            </div>
          </div>
          <div>
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              className="textarea textarea-primary textarea-lg w-full"
              id="message"
              style={{ minHeight: "200px" }}
            />
          </div>
          <div className="text-center my-10">
            <button className="btn btn-outline btn-accent btn-wide self-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ContactPage;
