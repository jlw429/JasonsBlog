import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch(
    'http://localhost:8000/blogs/' + id
  );
  const history = useHistory();

  const deleteClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className='blog-details'>
      {isLoading && <div>Hang On...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={deleteClick}>Delete Story</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
