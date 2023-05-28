"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";

function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormValues = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      setFormValues((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    },
    []
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //todo
  };

  return (
    <main>
      <div className="py-24 flex flex-col justify-center items-center">
        <h1 className="text-primary text-center text-3xl md:text-4xl mb-8">
          Hi, Let&apos;s have a talk!
        </h1>
        <form onSubmit={handleSubmit} className="min-w-full md:min-w-fit">
          <div className="md:flex justify-center gap-6">
            <div>
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-primary input-lg w-full"
                id="name"
                required
                value={formValues.name}
                onChange={(e) => handleFormValues(e)}
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
                value={formValues.email}
                onChange={(e) => handleFormValues(e)}
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
              value={formValues.message}
              onChange={(e) => handleFormValues(e)}
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
