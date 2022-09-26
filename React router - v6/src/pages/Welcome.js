import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Link to="new-user">New user</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
