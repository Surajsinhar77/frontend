import { useState } from "react";
import Button from "./UI/Button";

function Navbar() {
    const [auth, setAuth] = useState(false);
    return (
        <section>

            <div className="flex w-[75%] m-auto justify-between py-4 items-center">
                <div className="logo">
                    <h1>Logo</h1>
                </div>

                <div className="btnAndNavlinsk flex gap-3">
                    <div className="navlinks flex cols items-center">
                        <ul className="flex gap-3">
                            <li>  Home </li>
                            <li>  About </li>
                            <li>  Service </li>
                            <li>  Blog </li>
                        </ul>
                    </div>

                    <div className="authBtn">
                        {auth ?
                            <div className="flex cols gap-3">
                                <Button value={"SignUp"}/>
                                <Button value={"Login"}/>
                            </div>
                            :
                            <Button value={"Profile"}/>
                        }
                    </div>
                </div>
            </div>

            <hr />
        </section>

    )
}

export default Navbar;