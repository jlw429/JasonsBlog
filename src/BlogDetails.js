import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

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
  dayjs.extend(relativeTime);

  return (
    <div className='blog-details'>
      {isLoading && <div>Hang On...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog[0].Title}</h2>
          {/* <p>{blog[0].CreationDate.slice(0, 10)}</p> */}
          <p>{dayjs(blog[0].CreationDate).fromNow()}</p>
          <div>{blog[0].Blog_Body}</div>
          <button onClick={deleteClick}>Delete Story</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
