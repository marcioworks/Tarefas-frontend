import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Container } from './style'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import history from '../../services/history'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await api.post('/session',{email,password})
    console.log(result.data)
    localStorage.setItem('userData',JSON.stringify(result.data))
    api.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
    // salvar os dados de Login dentro do async storage
    // direcionar para a pagina Home
    history.push('/home')
    
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Login</h3>
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
        <Link to='/signup'> Ainda não possui uma conta?</Link>
      </Form>

    </Container>
  )

}

export default Login