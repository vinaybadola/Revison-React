// import Auth from './auth'
const CustomNavBar = () => {
  return (
    <nav className="navbar">
      <h1>The Magnetic Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" 
        >New Blog</a>
      </div>
      {/* <Auth /> */}
    </nav>
  )
}

export default CustomNavBar
