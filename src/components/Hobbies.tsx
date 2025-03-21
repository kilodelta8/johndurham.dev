
import DaddiesOldNewToy from '../assets/PursuitDarkHorse001.png';
import DaddiesNewToy from '../assets/DaddiesNewToy.png';


function Hobbies() {
  return (
    <>
      <h1>NOTE: UNDER CONSTRUCTION</h1>
      <br />
      <br />
      <div className="container container-project">
          <h3>Motorcycling</h3>
          <p>
              I'm hoping to be on one of these this coming riding season 2025.  My youngest is 1 year away from graduation
              and currently studying for her TIPIC.  She has her's picked out and working towards it.  I have been wishy 
              washy at best between this sweet Road Glide or an Indian Pursuit Dark Horse.  I think I'm gonna have to go for the
              Road Glide with a touring package and cushier seat.  For now, the Shadow will do!
          </p>
          <p>
              I am absolutely torn between the chrome or the black hardware (+$Left.Testical).
          </p>
          <div className="responsive-images">
              <img src={ DaddiesOldNewToy } alt="Motorcycling Image 1" className="responsive-img" />
              <img src={ DaddiesNewToy } alt="Motorcycling Image 2" className="responsive-img" />
          </div>
      </div>
      <br />
      <br />
      <div className="container container-project">
          <h3>Ham Radio</h3>
          <p>Obviously, I haven't update my digital log book in a hot minute.
              Most of my ops are CW (morse code).
          </p>
          <iframe 
            style={{ border: '0' }}
            height="500"
            src="https://logbook.qrz.com/lbstat/KD8UFZ/" 
            width="640">
          </iframe>
      </div>
    </>
  );
};

export default Hobbies;