import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { reset, getWeatherData } from '../features/weather/weatherSlice'



const SearchForm = () => {
  const [city, setCity] = useState('')

  const dispatch = useDispatch()

  const inputChangeHandler = (e) => {
    setCity(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    
    dispatch(reset())

    dispatch(getWeatherData(city))

    setCity('')
  }

  return (
    
    <Form className="mt-4 mb-3" onSubmit={submitHandler}>
      <InputGroup size="lg">
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
