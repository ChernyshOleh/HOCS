import React, {Component} from "react"
import withForm from "../hoc/withForm"
import withToggle from "../hoc/withToggle"

class RegisterForm extends Component {
  render() {
    const {email, login, password} = this.props.formState
    const {onChange, submit, isToggled, handleToggled} = this.props
    return (
      <form onSubmit={submit} className="col-md-3" autoComplete="off">
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Login</label>
          <input
            name="login"
            value={login}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={onChange}
            className="form-control"
          />
        </div>

        <div className="form-check">
          <input
            checked={isToggled}
            onChange={handleToggled}
            type="checkbox"
            name="isAgree"
            id="isAgree"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="isAgree">
            I Agree
          </label>
        </div>

        {isToggled && (
          <div className="form-group">
            <button className="btn btn-success">Register</button>
          </div>
        )}
      </form>
    )
  }
}

const RegisterFormWithForm = withForm(RegisterForm, {
  email: "",
  login: "",
  password: "",
})

export default withToggle(RegisterFormWithForm, false)
