import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from 'react-bootstrap'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Three" />
    <Container>
      <h1>Hi from the Third page</h1>
      <p>Welcome to page 3</p>
      <p><Link to="/page-2">Take me to page 2, now!</Link></p>
      <p><Link to="/">Go back to the homepage</Link></p>
    </Container>
  </Layout>
)

export default ThirdPage
