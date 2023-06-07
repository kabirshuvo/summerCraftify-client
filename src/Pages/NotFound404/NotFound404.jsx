
import { Link } from 'react-router-dom';

const NotFound404 = () => {
  return (
    <div  style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1677244284140-0717ca694b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-800 bg-opacity-70">
      <h3 className="text-4xl font-bold mb-4">404 - Not Found</h3>
      <p className="text-lg text-warning mb-8 text-center">
        Opps Something wrong <br />
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        Go back home
      </Link>
      </div>
    </div>
  );
};

export default NotFound404;
