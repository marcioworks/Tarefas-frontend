import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6666;

  form {
    width:450px;
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;

    button {
      width: 100%;
    }

    h3 {
      text-align: center;
      margin-bottom: 30px;
    }
    a {
    display: block;
    text-align: center;
    margin-top: 12px;
   }
  }
 
`;

export const Form = styled.form`
 

`;