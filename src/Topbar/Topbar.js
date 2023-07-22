
function Topbar() {
    return (
      <div className="top">
      <div className='topleft'>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className='topcenter'>
      <ul className='toplist'>
        <li className='toplistitem'>Home</li>
        <li className='toplistitem'>About</li>
        <li className='toplistitem'>Contact us</li>
        <li className='toplistitem'>Write</li>
        <li className='toplistitem'>Logout</li>
      </ul>
      </div>
      <div className='topright'>
      <img
              className="topimg"
              src="https://images.pexels.com/photos/14629396/pexels-photo-14629396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
      <i className=" topSearchicon fa-solid fa-magnifying-glass"></i>
      </div>
      </div>
      
    );
  }
export default Topbar;