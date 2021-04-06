import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  //   const handleDelete = props.handleDelete;
  return (
    <div className='blog-list'>
      <h2>{title}</h2>

      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.ID}>
          <Link to={`/blogs/${blog.ID}`}>
            <h2>{blog.Title}</h2>
            <p>{blog.CreationDate}</p>
            <p>Written By: {blog.Author}</p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
    
  );
  
};

export default BlogList;
