import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <h1>Authenticated Component</h1>
    );
  }
}

export default AuthenticatedApp
