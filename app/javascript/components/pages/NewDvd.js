import React from "react"
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom'

class NewDvd extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      responseOK: false,
      dvdAttributes: {
        titles: '',
        genre: '',
        year: ''
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('You logged this')
    fetch('/dvds.json', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({dvd: this.state.dvdAttributes})
    })
    .then((response)=>{
      this.setState({ responseOK: true })
    })
  }

  handleChange = (event) => {
    const { dvdAttributes } = this.state
    dvdAttributes[event.target.name] = event.target.value
    this.setState({ dvdAttributes: dvdAttributes })
  }


render () {
  const { dvdAttributes, responseOK } = this.state

    return (
      <div>
        {responseOK &&
          <Redirect to='/all-dvds'/>
        }
        {!responseOK &&
          <div>
            <h1>Add a DVD you'd like to fetch</h1>
            <form
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="titles">Title</label>
              <input
                type='text'
                name='titles'
                value={dvdAttributes.titles}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="genre">Genre</label>
              <input
                type='text'
                name='genre'
                value={dvdAttributes.genre}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="year">Year</label>
              <input
                type='number'
                name='year'
                value={dvdAttributes.year}
                onChange={this.handleChange}
              />
              <br />
              <button type='submit'>Add</button>
            </form>
          </div>
        }
      </div>
    );
  }
}

export default NewDvd
