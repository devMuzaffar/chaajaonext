import { Banner, Navbar, Hero, Blogs, Courses, Features } from "./components";

const App = () => {
  return (
    <div className="app">
        <Banner />
        <Navbar />
        <Hero />
        <Blogs />
        <Courses />
        <Features />
    </div>
  )
}

export default App