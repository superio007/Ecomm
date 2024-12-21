import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center text-center' style={{height: "80vh"}}>
      <div>
        <h1 className='fw-bold' style={{fontSize:"4rem"}}>404 Not Found</h1>
        <p style={{fontSize:"1.5rem"}}>Your visited page not found. You may go home page.</p>
      </div>
      <Link to={'/'} className='btn link-underline link-underline-opacity-0 text-white'  style={{border: "1px solid #db4444", background: "#db4444" , padding: "1rem 2rem"}}>Back to home page</Link>
    </div>
  );
}

export default NotFound;

