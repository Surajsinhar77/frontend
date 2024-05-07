export function Card_post({data}) {

    return (
        <>
            <div className="card p-2 border-[0.5px] rounded-lg cursor-pointer">
                <div className="images rounded-lg">
                    <img className="object-cover rounded-lg" src={data?.image} alt="post-image" />
                </div>
                <div className="otherContent flex flex-col gap-9 mt-3">
                    <div className="somemoreContent flex flex-col gap-3">
                        <span className="">
                            daily.devs
                        </span>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-black">
                                {data?.name}
                            </h2>

                            <h4 className="underline font-medium text-yellow-500">
                                {data?.cuisine}
                            </h4>

                            <div className="flex items-center">
                                <span className="bg-[#e669fb] w-[1.5px] h-12 mr-2 rounded-lg">
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, placeat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="usernameInfo flex gap-3 items-center">
                        <div className="avater">
                            <img className="w-10 h-10 rounded-xl" src="./img/avater.jpeg" alt="avater image" />
                        </div>

                        <div className="flex flex-col text-sm">
                            <div className="flex items-center gap-2">
                                {data.tags.map((item, index) =>
                                    <span key={index}> {item} </span>
                                )
                                }
                            </div>
                            <span> User ID : {data?.userId} </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}