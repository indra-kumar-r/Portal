import { styled } from "styled-components";

const Login = () => {
  return (
    <Main>
      <div className="login fs-1 fw-bold text-secondary">LOGIN</div>
      <form className="d-flex flex-column gap-2 mt-4">
        <div className="form_groups mb-3">
          <label htmlFor="user_username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="user_username"
            placeholder="Enter your username..."
            required
            autoComplete="off"
          />
        </div>
        <div className="form_groups mb-3">
          <label htmlFor="user_password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="user_password"
            placeholder="Enter your password..."
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          LOGIN
        </button>
      </form>
    </Main>
  );
};

export default Login;

let Main = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .login {
    letter-spacing: 1rem;
  }

  form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 30%;
    padding: 1rem;
    border: 0.05rem solid lightgray;
    border-radius: 0.25rem;

    .form_groups {
      width: 100%;

      label {
        color: black;
        font-weight: bold;
      }

      input {
        box-shadow: none;

        &::placeholder {
          color: darkgray;
        }
      }
    }
  }
`;
