import styled from 'styled-components'


export const Form = styled.form`
  display:flex;
  flex-direction: column;
  border: 1px dotted #666666;
  width: 22rem;
  justify-content:center;
  font-size: 16px;
  align-items:center;
  padding: 12px;
  margin:auto;

  input {
    font-size: 16px;
    padding: 8px;
    padding-bottom:10px;
    border-radius:8px;
    margin:10px;
  }
  button {
    font-size: 16px;
    padding: 8px;
    background: #129;
    border-radius:10px;
    color: #FFF;
  }
`;