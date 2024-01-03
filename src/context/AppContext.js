import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
import { useNavigate } from "react-router-dom";
// step 1=context create karna 
export const AppContext =createContext();


export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState([1]);
    const [totalPages,setTotalPages]=useState(null);
    const navigate=useNavigate();

// step 3=data filling karna 

    async function fetchBlogPosts(page=1,tag=null,category){
        setLoading(true)
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url+=`&tags=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try{
            const result =await fetch(url);
            const data =await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("error");
            setLoading(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
    function handlePageChange(page){
        navigate({search:`?page=${page}`});
        setPage(page);
        // fetchBlogPosts(page);

    }

    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange

    }

    // step2=provider apply karna 

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}