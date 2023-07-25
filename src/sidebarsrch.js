
import {FaSearch} from "react-icons/fa";
const sidebarsrch=(props) =>
{
   
    return(<div class={props.className} onChange={props.onChange}>
        <input type="text" class="searchbox" placeholder="search" ></input>
        <button class="searchbtn"><FaSearch></FaSearch></button>
    </div>)
}
export default sidebarsrch;