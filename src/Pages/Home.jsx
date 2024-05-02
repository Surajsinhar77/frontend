import Navbar from "../components/Navbar";
import { Card_post } from "../components/Card_post";
function Home(){
    return (
        <>
            <Navbar/>
            <div 
                className="cards-for-post w-[75%] m-auto pt-5 grid  lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2
                ">
                <Card_post/>
                <Card_post/>
                <Card_post/>
                <Card_post/>
                <Card_post/>
                <Card_post/>
                <Card_post/>
            </div>
        </>
    )
}


export default Home;