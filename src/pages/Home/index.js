import React, { Component } from 'react'
import DateTimePicker from 'react-datepicker'
import { Container, Rodape } from './style'
import 'moment/locale/pt-br'
import TodoList from '../../components/TodoList'




class Home extends Component {
  render() {
    return (
      <Container>
        <TodoList />
        {/* <Rodape className="fixed-bottom"/> */}
      </Container>

    )
  }
}



export default Home