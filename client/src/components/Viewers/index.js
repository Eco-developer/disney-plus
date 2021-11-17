import {
	Container,
	Wrap,
} from './style.js';
import { v4 as uuid } from 'uuid';

const Viewers = (props) => {
  const viewers = [{img: '/images/viewers-disney.png', video: '/videos/1564674844-disney.mp4'}, {img: '/images/viewers-pixar.png', video: '/videos/1564676714-pixar.mp4'}, {img: '/images/viewers-marvel.png', video: '/videos/1564676115-marvel.mp4'}, {img: '/images/viewers-starwars.png', video: '/videos/1608229455-star-wars.mp4'}, {img: '/images/viewers-national.png', video: '/videos/1564676296-national-geographic.mp4'}];

  return (
    <Container>
      {viewers.map(({img, video}) =>(
        <Wrap key={uuid()}>
          <img 
            src={img} 
            alt="viewer" 
          />
          <video 
            autoPlay={true} 
            loop={true} 
            playsInline={true} 
            muted={true}
          >
            <source 
              src={video} 
              type="video/mp4" 
            />
          </video>
        </Wrap>
      ))}
    </Container>
  )
}

export default Viewers;