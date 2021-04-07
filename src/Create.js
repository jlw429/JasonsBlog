import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [blog_body, setBlog_body] = useState('');
  const [author, setAuthor] = useState('Jason');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, blog_body, author };

    fetch('http://localhost:8000/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setIsLoading(true);
      history.push('/'); //sends you back to the homepage
    });
  };

  return (
    <div className='create'>
      <h2> Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Body:</label>
        <textarea
          id='blog_body'
          required
          value={blog_body}
          onChange={(e) => setBlog_body(e.target.value)}
        ></textarea>
        <label>Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='Jason'>Jason</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled> Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
