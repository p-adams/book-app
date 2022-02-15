import { useOutletContext } from "react-router-dom";

function SignUpForm() {
  const [_, setIsAuthenticated] = useOutletContext() as any;
  const authenticate = () => setIsAuthenticated(true);
  return (
    <form>
      sign up form{" "}
      <section>
        <button onClick={() => authenticate()}>sign up</button>
      </section>
    </form>
  );
}

export default SignUpForm;
