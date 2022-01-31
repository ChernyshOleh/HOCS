import React, {Component} from "react"
import withForm from "../hoc/withForm"

class LoginForm extends Component {
  render() {
    const {onChange, submit} = this.props
    const {email, password} = this.props.formState
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
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    )
  }
}
export default withForm(LoginForm, {
  email: "",
  password: "",
})
