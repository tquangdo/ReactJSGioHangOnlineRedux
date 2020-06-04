import React from 'react'
// import Header from './Header'
import ContaProducts from '../containers/ContaProducts'
import ContaMsg from '../containers/ContaMsg'
import ContaCart from '../containers/ContaCart'
import Footer from './Footer'

class NgoaiCung extends React.Component {
  render() {
    return (
      <div>
        {/* <Header></Header> */}
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

export default NgoaiCung
