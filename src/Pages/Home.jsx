import Navbar from "../components/Navbar";
import { Card_post } from "../components/Card_post";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function Home(){
    const [data, setData] = useState([]);

    async function getTheData(){
        let response = await fetch('https://dummyjson.com/recipes?limit=10');
        response = await response.json();
        setData(response.recipes)
        console.log(response.recipes)
    }

    useEffect(()=>{
        getTheData()
    },[]);

    return (
        <>
            <div className="cards-for-post w-[75%] m-auto pt-5 grid  lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2
                ">
                {
                    data.map((data,index)=>
                        <Link to={data?.name} key={index}> <Card_post data={data} /> </Link>
                    )
                }
            </div>
        </>
    )
}


export default Home;