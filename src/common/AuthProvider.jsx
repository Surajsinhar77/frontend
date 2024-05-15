import { useContext, createContext, useState } from "react";
const userContext = createContext();

export default function AuthProvider({children}){
    const [data, setData] = useState([]);
    const [search , setSearch] = useState('');
    const [searchData, setSearchData ] = useState([]);

    const [user, serUserData] = useState(()=>
        JSON.parse(localStorage.getItem('userinfo')? localStorage.getItem('userinfo') : null )
    );

    function searchItem(){
        const Data = data.filter((item)=> 
            item?.name?.toLowerCase().includes(search.toLowerCase())
        )
        setSearchData(Data);
    }

    function toSaveUserInfo(userData){
        localStorage.setItem('userinfo', JSON.stringify(userData));
        serUserData(userData)
    }

    function logOut(){
        localStorage.removeItem('userinfo');
        serUserData(null);
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
                user,
                toSaveUserInfo,
                logOut
            }
        }
        >
            {children}
        </userContext.Provider>
    )
}

export function useAuth() {return useContext(userContext)};