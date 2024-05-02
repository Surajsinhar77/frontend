import Navbar from "../components/Navbar";
import { Card_post } from "../components/Card_post";
function Home(){
    return (
        <>
            <Navbar/>
            <div className="cards-for-post w-[75%] m-auto pt-5">
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