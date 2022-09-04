import { useState, useEffect } from 'react';
const data = ['Web & Graphic Design', 'Full Stack Developer', 'English Tutor'];

const Hero = () => {
  // eslint-disable-next-line
  const [text, setText] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, text]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className='hero'>
      <div className='heroText'>
        <p className='hello'>Ciao, Sono</p>
        <h1 className='name'>OGHOMWEN OSAZUWA</h1>
        {text.map((work, workIndex) => {
          let position = 'nextSlide';
          if (workIndex === index) {
            position = 'activeSlide';
          }
          if (
            workIndex === index - 1 ||
            (index === 0 && workIndex === text.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <p className={position} key={workIndex}>
              {work}
            </p>
          );
        })}
        <a className='btn-hero' href='#portafoglio'>
          IL MIO LAVORO
        </a>
      </div>
    </section>
  );
};
export default Hero;
