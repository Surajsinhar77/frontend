import { useContext, createContext, useState } from "react";
const userContext = createContext();

export default function AuthProvider({children}){
    const [data, setData] = useState([]);
    const [search , setSearch] = useState('');
    const [searchData, setSearchData ] = useState([]);
    const [user, serUserData] = useState(false);

    function searchItem(){
        const Data = data.filter((item)=> 
            item?.name?.toLowerCase().includes(search.toLowerCase())
        )
        setSearchData(Data);
    }
    
    return(
        <userContext.Provider value={
            {
                search,
                setSearch,
                data, 
                setData,
                searchData,
                searchItem,
                serUserData,
                user
            }
        }
        >
            {children}
        </userContext.Provider>
    )
}

export function useAuth() {return useContext(userContext)};