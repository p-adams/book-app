import { Link } from "react-router-dom";
import { mockContactListData } from "../../api/index";
import "./Contact.css";
function ContactList() {
  return (
    <article className="contact-list-wrapper">
      <ul className="list">
        {mockContactListData().contacts.map((el, i) => (
          <li className="list-item" key={i}>
            <Link to={el.id}>{el.fullname}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ContactList;
