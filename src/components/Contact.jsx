import { CONTACT } from "../constants/constants";
export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center  text-4xl">Contact</h2>
      <div className="text-center tracking-tighter">
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <p>{CONTACT.email}</p>
      </div>
    </div>
  );
}
