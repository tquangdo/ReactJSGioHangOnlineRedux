import React from 'react'
import ContaProducts from './ContaProducts'
import ContaMsg from './ContaMsg'
import ContaCart from './ContaCart'
import Footer from '../components/Footer'

class ContaTrangChu extends React.Component {
  render() {
    return (
      <div>
        <main id="mainContainer">
          <div className="container">
            <ContaProducts></ContaProducts>
            <ContaMsg></ContaMsg>
            <ContaCart></ContaCart>
          </div>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default ContaTrangChu
