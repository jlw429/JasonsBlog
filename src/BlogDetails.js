import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch(
    'http://localhost:8000/blogs/' + id
  );
  const history = useHistory();

  const deleteClick = () => {
    fetch('http://localhost:8000/blogs/' + blog[0].ID, {
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
          <h2>{blog[0].Title}</h2>
          <p>{blog[0].CreationDate.slice(0, 10)}</p>
          <div>{blog[0].Blog_Body}</div>
          <button onClick={deleteClick}>Delete Story</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
