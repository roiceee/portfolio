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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-primary input-lg w-full"
                id="name"
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered input-primary input-lg w-full"
                id="email"
                required
              />
            </div>
          </div>
          <div>
            <label className="label" htmlFor="message">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-primary textarea-lg w-full"
              id="message"
              style={{ minHeight: "200px" }}
              required
            />
          </div>
          <div className="text-center my-10">
            <button className="btn btn-accent btn-outline btn-wide self-center border-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ContactPage;
