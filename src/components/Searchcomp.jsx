import { IoMdTime } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import { useEffect, useState } from "react";
import { space } from "postcss/lib/list";
import { useParams } from "react-router-dom";

function Searchcomp (){
    const [data, setData] = useState();
    const { id } = useParams();
    
    async function gettingDataById(){
        // const response = await(await fetch(`https://dummyjson.com/recipes/${id}`)).json();
        let response = await fetch(`https://dummyjson.com/recipes/${id}`);
        response = await response.json();
        setData(response);
    }


    useEffect(()=>{
        gettingDataById();
    },[])
      
    return (
        <div className="container m-auto">
            <div className="heading-class text-center m-8">
                <h1 className="text-5xl font-medium"> {data?.name} </h1>
            </div>

            <div className="content flex">
                <div className="leftpart w-[75%] flex flex-col gap-7">
                    <div className="mainImageHere w-[75%] m-auto rounded-3xl border">
                        <img className="w-full h-[420px] object-cover rounded-3xl" src={data?.image} alt="" />
                    </div>


                    <div className="borderImpInfo cards-for-post w-[90%] m-auto grid  lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2">
                        <div className="itemSection flex flex-row items-center">
                            <span className="flex items-center"> <span className="text-2xl"> Prepering Time </span> : {data?.prepTimeMinutes} </span>
                        </div>
                        <div className="itemSection flex flex-row items-center">
                            <span className="flex items-center"> <span className="text-2xl"> Cooking Time </span> : {data?.cookTimeMinutes} </span>
                        </div>

                        <div className="itemSection flex flex-row items-center">
                            <span className="flex items-center"> <span className="text-2xl"> Time Servings </span> : {data?.servings} </span>
                        </div>
                        <div className="itemSection flex flex-row items-center">
                            <span className="flex items-center"> <span className="text-2xl"> Difficulty </span> : {data?.difficulty} </span>
                        </div>

                        <div className="itemSection flex flex-row items-center">
                            <span className="flex items-center"> <span className="text-2xl"> Cuisine </span> : {data?.cuisine} </span>
                        </div>

                        {data?.tags && (
                            <div className="flex gap-2">
                                <span className="flex items-center text-2xl"> Tags </span>
                                <span className="flex flex-row items-center gap-2">
                                    {data?.tags?.map((item, index) =>
                                        <span key={index}> {item} </span>
                                    )}
                                </span>
                            </div>
                        )}
                    </div>


                    <div className="instructions my-3">
                        <h3 className="text-3xl uppercase my-4 font-normal"> Instructions </h3>
                        <div className="instructions-container">
                            <ul>
                                {
                                    data?.instructions?.map((item, index) =>
                                        <li key={index}>
                                            <span> Step {index + 1} : {item} </span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="rightPart w-[25%] flex flex-col gap-5 border items-center pt-6">
                    <div className="author">
                        <span>
                            <h2 className="flex items-center"> <h4 className="text-2xl">User</h4> : {data?.userId} </h2>
                        </span>

                        <span >
                            <h2 className="flex items-center">  <h4 className="text-2xl"> reviewCount </h4> : {data?.reviewCount} </h2>
                        </span>


                        <span className="flex items-center">
                            <h4>Rating : </h4>
                            <FcRating />
                            <FcRating />
                            <FcRating />
                            <FcRating />

                        </span>


                        <span>
                            <h4> User : {data?.userId} </h4>
                        </span>
                    </div>

                    <div className="ingredients text-yellow-600">
                        <h1 className="text-3xl text-black my-4">Ingredients</h1>
                        <div className="items">
                            <ol  className="list-decimal">
                                {data?.ingredients?.map((item, index) =>
                                    <li key={index}>
                                        <p className="text-orange-700">{item}</p>
                                    </li>
                                )
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Searchcomp;
