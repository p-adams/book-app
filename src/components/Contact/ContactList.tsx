import { mockContactListData } from "../../api/index";

function ContactList() {
  return (
    <article className="contact-list-wrapper">
      contact list{" "}
      <ul>
        {mockContactListData().contacts.map((el, i) => (
          <li key={i}>{el.fullName}</li>
        ))}
      </ul>
    </article>
  );
}

export default ContactList;
