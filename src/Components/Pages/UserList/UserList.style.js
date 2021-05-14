import styled from "styled-components";

export default styled.div`
  table {
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
    .avatar-wrapper {
      display: inline-block;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 80px;
        width: 80px;
      }
    }
    th,
    td {
      text-align: left;
      padding: 10px 20px;
    }
    td {
      cursor: pointer;
    }
    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    }
  }
`;
