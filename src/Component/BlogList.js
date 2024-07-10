const BlogList = ({ blogs,title,handleDelete }) => {   // here we are destructuring the props object to get the blogs and title properties directly in the function signature itself. 
    // const blogs = props.blogs;
    // const title = props.title;
  return (
    <div>
        <h2>{ title }</h2>
      <div className='blog-list'>
        {blogs.map( (blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <button onClick={ () => handleDelete(blog.id)}>Delete</button>
            </div>
        ))};
      </div>
    </div>
  )
}

export default BlogList;
