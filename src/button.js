const button=(props)=>
{

    return(<button class={props.className} onClick={props.click} id="crtbtn">{props.children}</button> )
}
export default button;