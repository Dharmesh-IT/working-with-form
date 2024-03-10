import { useState, FormEvent } from "react";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    reason: "",
    notes: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(contact);
  }
  const fieldStyled = "flex flex-col md-2";
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline md-3">Contact Us</h2>
      <p className="mb-3">
        If you enter your details we will get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={fieldStyled}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className={fieldStyled}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className={fieldStyled}>
          <label htmlFor="reason">Reason for contacting us</label>
          <select
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact({ ...contact, reason: e.target.value })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={fieldStyled}>
          <label htmlFor="notes"> Additional notes</label>
          <textarea
            name="notes"
            id="notes"
            placeholder="Additional notes"
            value={contact.notes}
            onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
