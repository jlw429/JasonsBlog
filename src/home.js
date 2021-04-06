import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    'http://localhost:8000/blogs'
  );
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>Hang On...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  );
  //The curly braces are conditional rendering for templating above. It takes from the left see tutorial 17 net ninja
};

export default Home;
