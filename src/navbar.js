import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Jasons Blog</h1>
      <div className='links'></div>
      <Link to='/'>Home</Link>
      <Link to='/create'>Add </Link>
      {/* //The link to is a special function of react router to not send the link to server using Href */}
    </nav>
  );
};

export default Navbar;
