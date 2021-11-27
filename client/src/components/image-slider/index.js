import {
  Carousel,
  Wrap,
  Title,
} from './style.js';
import { v4 as uuid } from 'uuid';
import { 
  useHistory,
  useLocation,
} from "react-router-dom";

const base_url = 'https://image.tmdb.org/t/p/original/';

const ImageSlider = ({slider=[]}) => {
  const { pathname } =  useLocation();
  const { push } = useHistory();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleClick = (id) => {
    push(`${pathname}/${id}`);
  }

  return (
    <Carousel {...settings}>
      { 
        slider.map((item) => (
          <Wrap 
            key={uuid()}
            onClick={() => handleClick(item.id)}
          >
            <div>
              <Title>
                <p>
                  {item.title || item.name}
                </p>
              </Title>
              <img 
                src={`${base_url}${item.backdrop_path || item.poster_path}`} 
                alt="slider-image" 
             />
            </div>
          </Wrap>
        ))
      }
    </Carousel>
  );
};

/*

<Wrap>
        <div>
          <img src="/images/slider-badging.jpg" alt="" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/images/slider-scale.jpg" alt="" />
        </div>
      </Wrap>

      <Wrap>
        <div>
          <img src="/images/slider-badag.jpg" alt="" />
        </div>
      </Wrap>

      <Wrap>
        <div>
          <img src="/images/slider-scales.jpg" alt="" />
        </div>
      </Wrap>

*/

export default ImageSlider;