import { Link } from "react-router-dom";
import { mockContactListData } from "../../api/index";

function ContactList() {
  return (
    <article className="contact-list-wrapper">
      contact list{" "}
      <ul>
        {mockContactListData().contacts.map((el, i) => (
          <li key={i}>
            <Link to={el.id}>{el.fullname}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ContactList;
