import { Link } from "react-router-dom";

function SignInForm(props: {
  onIsMemberClicked: (b: boolean) => void;
  onAuthenticate: (b: boolean) => void;
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <section>
        <span>
          <Link to="signup" onClick={() => props.onIsMemberClicked(false)}>
            Not a Member?
          </Link>
          <button onClick={() => props.onAuthenticate(true)}>Member</button>
        </span>
      </section>
    </form>
  );
}

export default SignInForm;
