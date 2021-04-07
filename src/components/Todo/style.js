import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  align-items: center;
  border: 1px solid #666;
  border-radius:8px;  
  margin-bottom:10px;
  margin-right:15px;
  background-color: ${(props) => (props.done ? '#12f563' : '#F2F3F5' )};

`;

export const TodoItem = styled.ul`
  display:flex;
  width:100%;
  font-size: 16px;
  list-style:none;
  justify-content:space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  
  li {
  display:flex;
  flex-direction: row;
  align-items:flex-start;
  justify-content: flex-start;
  border-radius: 4px;
  text-align:left;
 

  }

`;

export const Button = styled.button`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  border: 0;
  border-radius: 25px;
  background: none;
  transition: background 0.3s;

  &:hover {
    background: rgba(0,0,0,0.3);
  }

  svg {
    margin-bottom: 8px;
  }

`;
