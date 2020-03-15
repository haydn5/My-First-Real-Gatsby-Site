import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col, Image } from 'react-bootstrap'

import grapevine from "../images/grapevine.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="This is Home!" />
    <Container>
      <Row>
        <Col md={8}>
          <h1>Welcome to the Wine Country!</h1>
          <p><Image src={grapevine} alt="Grapevines basking in the sun" fluid rounded /></p>
          <p>This is more information.</p>
        </Col>
        <Col md={4}>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <p>This is an updated sentence.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </Col>
      </Row>
    </Container>
    
    
  </Layout>
)

export default IndexPage

