import * as React from 'react';
import "../Styles/AppStyles.css";
import { AdditionalCarouselClasses } from '../Constants/Classes';

const images = ["http://www.grcrunning.com/uploads/5/6/0/9/5609246/elena-clarendonday2_orig.jpg", "http://www.grcrunning.com/uploads/5/6/0/9/5609246/gw-parkway-grc_orig.jpg"]

export const Carousel: React.FunctionComponent = () => {
    const [imageToUse, setImageToUse] = React.useState(0);
    const imageToUseRef = React.useRef(imageToUse);
    imageToUseRef.current = imageToUse;
    React.useEffect(() => {
        const timer = setInterval(() => {
          setImageToUse(imageToUseRef.current === images.length - 1 ? 0 : imageToUseRef.current + 1);
        }, 2000);
        return () => clearInterval(timer);
      }, []);
    return (
        <div className="carousel__wrapper">
            {images.map((image, i) => <img alt="" src={image} key={image} className={`carousel__image ${imageToUse === i ? "" : AdditionalCarouselClasses.HIDDEN}`}/>)}
        </div>
    );
}