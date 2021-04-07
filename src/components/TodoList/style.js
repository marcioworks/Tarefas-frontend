import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  padding-left:20px;
  width: 100%;
  text-align:left;

  button {
    width:100px;
  }
 
`;

export const Button = styled.button`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-left: 30px;
  margin-right: 30px;
  margin: auto;
  padding: 20px;
  border: 0;
  border-radius: 25px;
  background: none;
  transition: background 0.3s;


  &:hover { 
    background: rgba(0,255,0,0.3);
  }

  svg {
    margin-bottom: 8px;
  }
`;