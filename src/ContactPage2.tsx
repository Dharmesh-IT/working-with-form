import { Form, ActionFunctionArgs, redirect } from "react-router-dom";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage2() {
  const fieldStyled = "flex flex-col md-2";
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline md-3">Contact Us</h2>
      <p className="mb-3">
        If you enter your details we will get back to you as soon as possible.
      </p>
      <form method="post">
        <div className={fieldStyled}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className={fieldStyled}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
            pattern="\S+@\S+\.\S+"
          />
        </div>
        <div className={fieldStyled}>
          <label htmlFor="reason">Reason for contacting us</label>
          <select id="reason" name="reason" required>
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

export async function contactPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const contact = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    reason: formData.get("reason") as string,
    notes: formData.get("notes") as string,
  } as Contact;
  console.log(contact);
  return redirect(`/thankyou/${formData.get("name")}`);
}
