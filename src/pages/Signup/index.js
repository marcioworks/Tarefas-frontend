import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Container } from './style'
import { Link } from 'react-router-dom'
import history from '../../services/history'
import api from '../../services/api'


function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    await api.post('/users',{name,email,password})
    
    history.push('/');
    
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Cadastrar</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            placeholder="Digite seu nome" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            placeholder="Digite seu email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder="Senha" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to='/'> Já possui uma conta?</Link>
      </Form>

    </Container>
  )

}

export default Signup