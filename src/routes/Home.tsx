import Header from '../Components/Header/Header'
import RecendCard from '../Components/HeroComponents/RecendCard'
import ProfileCard from '../Components/HeroComponents/ProfileCard'
import PostUploadercard from '../Components/HeroComponents/PostUploadercard'
import Posts from '../Components/HeroComponents/Posts'
import Feed from '../Components/HeroComponents/Feed'

function Home() {
  return (
    <div className="w-screen h-[100%] bg-slate-100">
      <div className="">
      <Header />
      <div className="flex flex-row flex-1 w-full">
        {/* right container */}
        <div className="flex w-[20%]  p-2 m-5 flex-col">
          <ProfileCard />
          <RecendCard />
        </div>

        {/* Center Container */}
        <div className="flex w-[50%]  p-2 m-5  flex-col">
          <PostUploadercard />
          <Posts />
        </div>
        <div className="flex w-[24%]  p-2 m-5">
          <Feed />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
