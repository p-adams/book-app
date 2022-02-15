import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import SignInForm from "./SignInForm";
type ContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};
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
                <Outlet context={{ isAuthenticated, setIsAuthenticated }} />
              )
            ) : null}
          </section>
        </section>
      </article>
    </div>
  );
}

export function useAuth() {
  return useOutletContext<ContextType>();
}

export default AdminPage;
