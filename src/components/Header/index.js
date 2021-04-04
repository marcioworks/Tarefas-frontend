import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Content } from './style'
import { FaClipboardList} from 'react-icons/fa';


class Header extends Component {
  render() {
    return (
      <Container>
        <Content className="fixed-top">
          <nav>
          <FaClipboardList size={45} color="#FFF"/>
            <Link to="/" >Lista de Tarefas</Link>
          </nav>
        </Content>
      </Container>
    )
  }
}

export default Header
