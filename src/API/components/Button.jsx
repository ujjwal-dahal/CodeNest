import "../api css/Button.css"

let Button = ({btnName , btnColor, clickBtn})=>{

  return<>
    <button className={`btn ${btnColor}`} onClick={clickBtn} >{btnName}</button>
  </>
}

export default Button;