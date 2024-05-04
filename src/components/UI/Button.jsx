
function Button(a){
    return(
        <button onClick={a?.onclick} className={`border px-3 py-1 rounded ${a?.bg} text-white`}> {a?.value}</button>
    )
}

export default Button;