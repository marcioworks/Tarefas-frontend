import React from 'react'
import { FaCheckDouble, FaTrash } from 'react-icons/fa'
import moment from 'moment';
import 'moment/locale/pt-br';
import { Container, TodoItem, Button } from './style'


function Todo(props) {
  const date = props.date ? props.date : '';
  const formatedDate = moment(date).locale('pt-br').format('ddd D [de] MMMM');
  return (
    <Container done={props.itsDone}>
      <TodoItem >
        <li>
          <div>
            <h5>{props.desc}</h5>
            <small>{formatedDate}</small>
          </div>
        </li>
        <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'row' }}>
          {!props.itsDone &&
            <Button onClick={() => props.concluir(props.id)}>
              <FaCheckDouble size={28} color="#3e3" />
              Concluir</Button>
          }
          <Button onClick={() => props.deletar(props.id)}>
            <FaTrash size={28} color="#933" />
            Deletar</Button>
        </div>
      </TodoItem>
    </Container>
  )
}

export default Todo