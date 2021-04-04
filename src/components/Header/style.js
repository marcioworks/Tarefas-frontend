import styled from 'styled-components'


export const Container = styled.div`
  background: #FFF;
  width: 100%;
  
`;


export const Content = styled.div`
  height: 64px;
  background-color:#1d0e60;
  /* max-width: 100%; */
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      width:70px;
    }
    a {
      font-weight: bold;
      color: #FFF;
      text-decoration:none;
     
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

