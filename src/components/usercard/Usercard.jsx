import  './usercard.css'
import  opa from "../../assets/opa.jpg"

function Usercard(props) {

  return (
    <div className='usercard' style={{}}>
     <img src={opa} alt="Nuri yo'q opa" />
     <h2>{props.props.ism}</h2>
     <p>{props.props.lavozim}</p>
     <p>{props.props.kasbi}</p>
    </div>
  )
}

export default Usercard