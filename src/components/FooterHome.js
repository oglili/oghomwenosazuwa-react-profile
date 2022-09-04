import logo from '../logo.png';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const FooterHome = () => {
  return (
    <>
      <div className='footer'>
        <img src={logo} alt='og logo' className='logo' />
        <p>Oghomwen Osazuwa &copy; 2022</p>
        <a href='#top'>
          <BsFillArrowUpSquareFill
            style={{
              color: '#6c63ff',
              fontSize: '2em',
            }}
          />
        </a>
      </div>
    </>
  );
};
export default FooterHome;
