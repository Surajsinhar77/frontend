import { useState } from "react";
import Button from "./UI/Button";
import { Link } from "react-router-dom";
import About from "../Pages/About";
import { useAuth } from "../common/AuthProvider";

function Navbar() {

    const { setSearch , searchItem, user} = useAuth();

    function setSearchData(e){
        setSearch(e.target.value);
    }

    return (
        <section>

            <div className="flex w-[75%] m-auto justify-between py-4 items-center">
                <div className="logo flex items-center">
                    <div className="logo w-24 h-24 flex items-center">
                        <Link to='/'> <img src="https://shorturl.at/lAJX2" alt="logo" /> </Link>
                    </div>
                </div>

                <div className="serchItem flex gap-2">
                    <input 
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    type="text"
                    onChange={setSearchData}
                    placeholder="Search"
                    />

                    <Button onclick={searchItem}  value="Search"/>
                </div>
                <div className="btnAndNavlinsk flex gap-3">
                    <div className="navlinks flex cols items-center">
                        <ul className="flex gap-3">
                            {/* sender */}
                            <Link to='/'> Home </Link>
                            <Link to='/about'> About </Link>
                            <Link to='/contact'> Contact </Link>
                            <Link to='/service'> Service </Link>
                        </ul>
                    </div>

                    <div className="authBtn">
                        {user ?
                            <div className="flex cols gap-3">
                                <Link to='/signup'> <Button value={"SignUp"}/> </Link>
                                <Link to='/login'> <Button value={"Login"}/> </Link>
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