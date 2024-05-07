import Navbar from "../components/Navbar";
import { Card_post } from "../components/Card_post";
import { useEffect, useState } from "react";


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
            <Navbar/>
            <div 
                className="cards-for-post w-[75%] m-auto pt-5 grid  lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2
                ">
                {
                    data.map((data,index)=>
                        <Card_post key={index} data={data} />

                    )
                }
            </div>
        </>
    )
}


export default Home;