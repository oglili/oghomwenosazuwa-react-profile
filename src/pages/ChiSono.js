import myphoto from '../asset/images/me_pic.jpg';
import Footer from '../components/Footer';

const ChiSono = () => {
  return (
    <>
      <div className='title chi-title'>
        <h3 className='chi-header'>about me</h3>
        <div className='underline'></div>
        <img src={myphoto} alt='my pic' className='conttati-photo' />
        <p className=' chi-sono-paragraph'>
          Sono una sviluppatrice Full Stack che viva in Italia. Ho una forte
          passione per la creazione di siti Web veloci, reattivi e dinamici.
          Interessato allo spettro front-end e back-end dello sviluppo web e
          pronto a lavorare con persone positive.
        </p>
        <Footer />
      </div>
    </>
  );
};
export default ChiSono;
