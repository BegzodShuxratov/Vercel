import './Infocard.css'

import to from "../../assets/to.png"
function Infocard(props) {
  return (
    <div className="otaw container">
    <div className='infocard '>
      <img src={to} alt="" />
      <h3>{props.props.h3}</h3>
      <p> {props.props.p} </p>
      <button>{props.props.btn}</button>
    </div>

    </div>
    
  )
}

export default Infocard