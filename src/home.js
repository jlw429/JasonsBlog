import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  useEffect(() => {
    //re-renders the DOM every time at every render. especially to fetch data
    console.log('useEffect ran');
    console.log(name);
  }, [name]);

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'mario')}
        title="Mario's Blog!"
      />
      <button onClick={() => setName('luigi')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
