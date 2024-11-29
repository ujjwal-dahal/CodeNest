
function Button({title,clickNumber , className , id}){
  return <>

  <button onClick={()=>clickNumber(title)} className={className} id={id} > {title} </button>

  </>
}


export default Button;