import { useEffect, useState } from "react";
import Button from "../components/UI/Button";
import { useAuth } from "../common/AuthProvider";
import { useNavigate } from "react-router-dom";


function Login() {
    // const[ userData, setUserData] = useState('');
    const [useData, setUserData] = useState({});  //useData : { {key : value}, {key2 : value2} }
    // {{email : 'aasdasdas'}}

    const {toSaveUserInfo} = useAuth();
    const navigate = useNavigate();

    function Inputhandel(e) {
        e.preventDefault();
        // console.log(document.querySelector('.email').value);
        // console.log(event.target.value);

        // using only one function for both input fields
        setUserData({ ...useData, [e.target.name]: e.target.value }) //{ "email1" : "asdasd", "password1" : "9891281"}
    }


    // function InputPassword(event){
    //     // console.log(document.querySelector('.email').value);
    //     // console.log(event.target.value);
    //     setPassword(event.target.value)
    // }

    async function submitData() {
        // console.log( "email :", useData?.email1 , " Password : ", useData?.password1, useData?.phone); 
        const response = await fetch('https://dummyjson.com/auth/login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: 'kminchelle',
                    password: '0lelplR',
                    // username: useData?.email,
                    // password: useData?.password,
                    expiresInMins: 30, // optional, defaults to 60
                })
            }
        )
        
        toSaveUserInfo(await response.json());
        navigate('/');
    }

    // useEffect(()=>{

    // })
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="loginItems flex flex-col w-[300px] h-auto gap-4">
                <div className="heading flex justify-center">
                    <h1 className="header text-5xl font-semibold">Login</h1>
                </div>

                <div className="inputOptions flex flex-col gap-4">
                    <span className="border rounded">
                        <input
                            onChange={Inputhandel}
                            name="email"
                            type="email"
                            className="email w-full h-full py-2 pl-2"
                            placeholder="Email eg.. 123@gmail.com"
                        />
                    </span>
                    <span className="border rounded">
                        <input
                            onChange={Inputhandel}
                            name="password"
                            type="password"
                            className="w-full h-full py-2 pl-2"
                            placeholder="Password"
                        />
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