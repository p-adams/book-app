import { useAuth } from "./index";
function SignUpForm() {
  const { setIsAuthenticated } = useAuth();

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
