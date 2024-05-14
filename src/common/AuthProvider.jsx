import { useContext, createContext, useState } from "react";
const userContext = createContext();

export default function AuthProvider({children}){
    const [data, setData] = useState([]);
    const [search , setSearch] = useState('');
    const [searchData, setSearchData ] = useState([]);


    function searchItem(){
        const Data = data.filter((item, index)=> 
            item?.name?.toLowerCase().includes(search.toLowerCase())
        )
        setSearchData(Data);
        console.log("after search ", Data)
    }
    
    return(
        <userContext.Provider value={
            {
                search,
                setSearch,
                data, 
                setData,
                searchData,
                searchItem
            }
        }
        >
            {children}
        </userContext.Provider>
    )
}


export function useAuth() {return useContext(userContext)};