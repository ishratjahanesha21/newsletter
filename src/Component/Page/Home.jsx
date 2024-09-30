import Blog from "../Blog"
import Footer from "../Footer"
import Header from "../Header"
import IntroPost from "../IntroPost"
import Search from "../Search"


const Home = () => {
  return (
    <div>
{/* section */}
<Header/>
<Search/>
<IntroPost/>
<Blog/>
<Footer/>
    </div>
  )
}

export default Home