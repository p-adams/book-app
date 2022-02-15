import { useState } from "react";
import { Outlet } from "react-router-dom";
import SignInForm from "./SignInForm";

function AdminPage() {
  const [isMember, setIsMember] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <article>
        <section>
          admin page {JSON.stringify(isAuthenticated)}
          <section>
            {!isAuthenticated ? (
              isMember ? (
                <SignInForm
                  onIsMemberClicked={(isMember) => setIsMember(isMember)}
                  onAuthenticate={(isAuthenticated) =>
                    setIsAuthenticated(isAuthenticated)
                  }
                />
              ) : (
                <Outlet context={[isAuthenticated, setIsAuthenticated]} />
              )
            ) : null}
          </section>
        </section>
      </article>
    </div>
  );
}

export default AdminPage;
