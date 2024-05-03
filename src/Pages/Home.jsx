import Navbar from "../components/Navbar";
import  Card_post  from "../components/Card_post";
function Home(){
    return (
        <>
            <Navbar/>
            <div className="cards-for-post w-[75%] m-auto pt-5">
                <Card_post
                    author={"Ante baric"}
                    date="Nav 13,2023"
                    title="Moving back to React"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, placeat."
                    avatarSrc="./img/avater.jpeg"
                    postImageSrc="./img/post.jpg"
                />
                {/* <Card_post
                    author="Ido Shamun"
                    date="Oct 16, 2023"
                    title="Scaling a side project: The story of daily.dev"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, placeat."
                    avatarSrc="./img/avatar1.jpeg"
                    postImageSrc="./img/post1.jpg"
                />
                <Card_post
                    author="Nimrod Kramer"
                    date="Aug 2, 2023"
                    title="Source spotlight by daily.dev: Product hunt"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, placeat."
                    avatarSrc="./img/avatar2.jpeg"
                    postImageSrc="./img/post2.jpg"
                />
                <Card_post
                    author="Nimrod Kramer"
                    date="Jul 19, 2023"
                    title="Daily dev's first ever town hall: Our story , updaes and a community AMA"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, placeat."
                    avatarSrc="./img/avatar2.jpeg"
                    postImageSrc="./img/post3.jpg"
                />
                <Card_post
                    author="Daily Dev"
                    date="Jun 6, 2023"
                    title="Giveaway campaign terms and conditions"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, placeat."
                    avatarSrc="./img/avatar4.jpeg"
                    postImageSrc="./img/post4.jpg"
                />
                <Card_post
                    author="Nimrod Kramer"
                    date="Apr 1, 2023"
                    title="Give your eyes a break! Introducing daily dev paper edition"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, placeat."
                    avatarSrc="./img/avatar2.jpeg"
                    postImageSrc="./img/post5.jpg"
                /> */}
            </div>
        </>
    )
}


export default Home;