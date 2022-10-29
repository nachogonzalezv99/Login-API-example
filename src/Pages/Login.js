import RowInput from "../Components/RowInput";
import useForm from "../Hooks/useForm";
import Wrapper from "../Wrappers/FormWrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { login } from "../features/auth/authSlice";
import { Navigate } from "react-router-dom";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { input, disabled, onChange } = useForm({
    defaultValues,
  });
  const { token, status } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(input));
  };

  if (token) {
    return <Navigate to="/all-users" replace />;
  }

  return (
    <Wrapper>
      <div className="container">
        <h2>Login</h2>
        <div className="info-container flex">
          <div className="center">
            <form className="form" onSubmit={onSubmit}>
              {status==='failed' && <p className="error-message">Login error</p>}
              <RowInput
                type="email"
                id="email"
                label="Email"
                name="email"
                value={input.email}
                onChange={onChange}
              />
              <RowInput
                type="password"
                id="password"
                label="Password"
                name="password"
                value={input.password}
                onChange={onChange}
              />
              <div className="btn-container">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={disabled}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
