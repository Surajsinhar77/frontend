
function Button(a){
    console.log(a)
    return(
        <button  className=" border px-3 py-1 rounded bg-gray-600 text-white"> {a.value}</button>
    )
}

export default Button;