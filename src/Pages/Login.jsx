import { useEffect, useState } from "react";
import Button from "../components/UI/Button";

function Login(){
    // const[ userData, setUserData] = useState('');
    const[useData, setUserData] = useState({});  //useData : { {key : value}, {key2 : value2} }
    // {{email : 'aasdasdas'}}

    function Inputhandel(e){
        e.preventDefault();
        // console.log(document.querySelector('.email').value);
        // console.log(event.target.value);
        
        // using only one function for both input fields
        setUserData({...useData , [e.target.name]: e.target.value}) //{ "email1" : "asdasd", "password1" : "9891281"}
    }
    

    // function InputPassword(event){
    //     // console.log(document.querySelector('.email').value);
    //     // console.log(event.target.value);
    //     setPassword(event.target.value)
    // }


    function submitData(){
        console.log( "email :", useData?.email1 , " Password : ", useData?.password1, useData?.phone); 
    }


    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="loginItems flex flex-col w-[300px] h-auto gap-4">
                <div className="heading flex justify-center">
                    <h1 className="header text-5xl font-semibold">Login</h1>
                </div>

                <div className="inputOptions flex flex-col gap-4">
                    <span className="border rounded">
                        <input onChange={Inputhandel} name="email1" type="email" className="email w-full h-full py-2 pl-2"/>
                    </span>
                    <span className="border rounded">
                        <input onChange={Inputhandel} name="password1" type="password" className="w-full h-full py-2 pl-2"/>
                    </span>
                    <span className="border rounded">
                        <input onChange={Inputhandel} name="phone" type="number" className="w-full h-full py-2 pl-2"/>
                    </span>
                </div>

                <div className="submitBtn flex justify-center">
                    <Button onclick={submitData} value={"Login"} bg={'bg-blue-600'} />
                </div>
            </div>
        </div>
    )
}

export default Login;