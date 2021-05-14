import React from "react";
import StyleWrapper from "./SignUpForm.style";
import { isEmail } from "../../../Utils/common";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      errorMsg: "",
      formSubmitMsg: "",
    };
  }

  inputChangehandler = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      errorMsg: "",
    });
  };

  submitHandler = () => {
    const { fullName, email, password } = this.state;
    if (this.validation()) {
      console.log(
        `FullName=${fullName}, Email=${email}, Password: ${password}`, this.state
      );
      this.setState({
        fullName: "",
        email: "",
        password: "",
        formSubmitMsg: "Form Submitted. Please check console"
      });
    }
  };

  validation = () => {
    const { email, fullName, password, formSubmitMsg } = this.state;
    let isValid = true;
    let errorMsg;
    if (fullName === "") {
      isValid = false;
      errorMsg = "Please enter your name";
      this.setState({
        errorMsg,
      });
    } else if (email === "") {
      isValid = false;
      errorMsg = "Please enter your email";
      this.setState({
        errorMsg,
      });
    } else if (password === "") {
      isValid = false;
      errorMsg = "Please enter your password";
      this.setState({
        errorMsg,
      });
    } else if (!isEmail(email)) {
      isValid = false;
      errorMsg = "Please enter valid email";
      this.setState({
        errorMsg,
      });
    }
    return isValid;
  };

  render() {
    const { fullName, email, password, errorMsg, formSubmitMsg } = this.state;
    return (
      <StyleWrapper>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            onChange={this.inputChangehandler}
            value={fullName}
            name="fullName"
          />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            onChange={this.inputChangehandler}
            value={email}
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            onChange={this.inputChangehandler}
            value={password}
            name="password"
          />
        </div>
        <button type="button" onClick={this.submitHandler}>
          Submit
        </button>
        {formSubmitMsg && <span className="succes-msg">{formSubmitMsg}</span>}
        {errorMsg && <span className="error-msg">{errorMsg}</span>}
      </StyleWrapper>
    );
  }
}

export default SignUpForm;
