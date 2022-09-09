import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div>
      <h1>Error! Page Not Found</h1>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}
export default ErrorPage;
