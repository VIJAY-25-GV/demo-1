import { Link } from "react-router-dom";
import "./sign.css"
function Sign(){
    return(
        <form >
            {/* <img src="/img/cup-cake-png.png" alt="cake" className="img"/> */}
            <div className="signoutter"> 
            <label for="email">email</label>
            <input type="text" name="email" placeholder="@EMAIL"></input>
            <lable for="pass">password</lable>
            <input type="password" placeholder="@#12abAB"></input>
            <button className="btn" >Sign in</button>
            <Link className="forg">forget password</Link>
            <div className="ch">
            <lable for="ch" className="ch">Remember me</lable>
            <input type="checkbox" name="ch" ></input>
            </div>
            </div>
        </form>
    )
}
export default Sign;