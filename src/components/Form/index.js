import React, { useState } from 'react'
import api from '../../services/api'
import history from '../../services/history'
import { Form } from './style'

function TodoForm() {
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState(new Date())

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (desc === '' || desc === null) {
      return alert('Tarefa Vazia')
    }
    try{
      await api.post('todo', { desc, date })
      history.go(0)
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div class='form'>
      <Form onSubmit={handleSubmit}>
        <label>Nova Tarefa</label>
        <input type="text"
          value={desc}
          onChange={(e) => { setDesc(e.target.value) }}
          placeholder="Tarefa" />
        <label>Data</label>
        <input type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value) }} />
        <button type="submit">Salvar</button>
      </Form>
    </div >
  )
}

export default TodoForm