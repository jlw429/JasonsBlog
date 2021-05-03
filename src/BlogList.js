import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  //   const handleDelete = props.handleDelete;
  dayjs.extend(relativeTime);
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.ID}>
          <Link to={`/blogs/${blog.ID}`}>
            <h2>{blog.Title}</h2>
            {/* <p>{blog.CreationDate.slice(0, 10)}</p> */}
            <p>{dayjs(blog.CreationDate).fromNow()}</p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
