import React, { Component } from 'react'
import { Container, Button } from './style'
import { FaPlusCircle } from 'react-icons/fa'
import Todo from '../Todo'
import api from '../../services/api'
import axios from 'axios'
import history from '../../services/history'
import Form from '../Form'


const initialState = {
  showAddTodo: false,
  todos: []
}

class TodoList extends Component {
  state = {
    ...initialState
  };

  componentDidMount = async () => {
    const storage = await localStorage.getItem('userData')
    const userData = JSON.parse(storage)

    if (!storage || !userData.user) {
      history.push('/')
      console.log('aqui')
    }
    else {
      const token = userData.token.toString()
      console.log(token)
      try {
        api.defaults.headers.Authorization = `Bearer ${userData.token}`;
        const result = await api.get('todo')
        const todos = result.data
        this.setState({ todos: todos })
        console.log(todos)

      } catch (error) {
        console.log(error.response)

      }
    }
  }
  render() {
    const todos = [...this.state.todos]

    const buscaTarefas = async () => {
      const result = await api.get('todo');
      const todos = result.data
      this.setState({ todos })
    }

    const markConcluir = async (id) => {
      try {

        await api.put(`todo/${id}`).then(buscaTarefas)
      } catch (err) {
        console.log(err)
      }
      // console.log(this.state.todos)
    }

    const deletar = async (id) => {
      try {
        await api.delete(`todo/${id}`).then(buscaTarefas)
      } catch (err) {
        console.log(err)
      }
    }

    const addTodo = () => {
      this.setState({ showAddTodo: !this.state.showAddTodo })
    }
    return (
      <Container>
        {
          todos.map(todo => {
            return (
              <Todo itsDone={todo.done} concluir={() => markConcluir(todo.id)}
                deletar={() => deletar(todo.id)}
                key={todo.id} desc={todo.desc} date={todo.date} />
            )
          })
        }
        <div>
          {this.state.showAddTodo && <Form />}
        </div>
        <div>
          <Button>
            <FaPlusCircle onClick={addTodo} size={35} color="#162" />
            Adicionar</Button>
        </div>
      </Container>

    )
  }
}

export default TodoList