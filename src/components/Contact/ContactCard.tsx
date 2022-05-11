import { useParams } from "react-router-dom";

function ContactCard() {
  const { id } = useParams();
  return <article className="contact-card-wrapper">contact card {id}</article>;
}

export default ContactCard;
