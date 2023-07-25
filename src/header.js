import { Link } from "react-router-dom";
import { FaCartArrowDown } from 'react-icons/fa';
const header =(props)=>
{
  console.log("hi")
    return (<div class={props.className}>
         <div>CODASHOP</div>
        <div >
        <div class="innercart">
        <Link to={"/cart"} class="carticon">
        <FaCartArrowDown ></FaCartArrowDown>
         </Link>
        </div>
      </div>
    </div>)
}
export default header;