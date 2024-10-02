import"@/app/globals.css"

import Link from "next/link"
Link


export default function Nevbar (){
    return(
        
        <div className="main_container">
            <ul className="child_container">
                <Link href={"/"}>
                <li className="child">Home</li>
                </Link>
                
                <Link href={"/about"}>
                <li className="child">about us</li>
                </Link>
                <Link href={"/contact"}>
                <li className="child">contact us</li>
                </Link>
            </ul>
           
        </div>
        
    )
}



9





