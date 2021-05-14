import styled from 'styled-components';


export default styled.header`
    background-color: #6600cc;

   ul {
       margin: 0;
       list-style: none;
       display: flex;
       margin-bottom: 15px;
       li {
           padding: 15px 20px;
           margin: 0;
           a {
               color: #fff;
               text-decoration: none;
               text-transform: uppercase;
               &.active {
                   border-bottom: 3px solid red;
               }
           }
       }
   }
  
`;