import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'

const SearchForm = () => {
  const [city, setCity] = useState('')

  const inputChangeHandler = (e) => {
    setCity(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log()

    setCity('')
  }

  return (
    <Form className="mb-3" onSubmit={submitHandler}>
      <InputGroup size="sm">
        <Form.Control
          type="text"
          placeholder="Enter city name"
          id="city"
          name="city"
          value={city}
          onChange={inputChangeHandler}
        />
        <Button type="submit" variant="dark">
          Search
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchForm
