import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <h2>Sorry this page does not exist</h2>
      <Link to="/" className="btn">
        Go to login page
      </Link>
    </div>
  );
};

export default Error;
