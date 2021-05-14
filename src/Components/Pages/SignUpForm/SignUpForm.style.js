import styled from "styled-components";

export default styled.div`
  width: 400px;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 5px 8px 15px rgba(0,0,0,0.2);
  .form-group {
    margin: 0 0 20px;
  }
  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 10px;
  }
  input {
    border: none;
    border: 1px solid #dadada;
    outline: none;
    height: 34px;
    width: 100%;
    font-size: 14px;
    padding: 5px 10px;
  }
  button {
    font-size: 13px;
    font-weight: bold;
    padding: 10px 20px;
    background: #0000ff;
    color: #fff;
    border: none;
  }
  .error-msg {
    color: #ff0000;
    display: block;
    font-size: 14px;
    padding: 10px 0;
  }
  .succes-msg {
    color: #008000;
    display: block;font-size: 14px;
    padding: 10px 0;
  }
`;
