import * as React from 'react';
import $ from 'jquery';
import "../../Styles/AppStyles.css";
import { AdditionalCarouselClasses } from '../Constants/Classes';

// TODO: Get images from database or something similar.
const images = ["http://www.grcrunning.com/uploads/5/6/0/9/5609246/elena-clarendonday2_orig.jpg", "http://www.grcrunning.com/uploads/5/6/0/9/5609246/gw-parkway-grc_orig.jpg"]

export const Carousel: React.FunctionComponent = () => {
	const [imageToUse, setImageToUse] = React.useState(0);
	const [mediaStyles, setMediaHeight] = React.useState({});
	const imageToUseRef = React.useRef(imageToUse);
	const mediaStylesRef = React.useRef(mediaStyles);
	const resizeCarousel = () => {
		const height = $(".carousel__image")[0].scrollHeight;
		setMediaHeight({ ...mediaStylesRef, height: `${height + 48}px` });
	};
    imageToUseRef.current = imageToUse;
    React.useEffect(() => {
        const timer = setInterval(() => {
          setImageToUse(imageToUseRef.current === images.length - 1 ? 0 : imageToUseRef.current + 1);
        }, 5000);
        return () => clearInterval(timer);
      }, []);
    React.useEffect(() => {
		window.addEventListener("resize", resizeCarousel);
		return window.removeEventListener("resize", resizeCarousel);
	}, []); // might wanna add ,[] here to prevent constant resizing.
    return (
        <div className="carousel__wrapper" style={mediaStyles}>
			{images.map((image, i) => 
				<img 
					onLoad={() => {
						const height = $(".carousel__image")[0].scrollHeight;
						setMediaHeight({ ...mediaStylesRef, height: `${height + 48}px` });
					}} 
					alt="" 
					src={image} 
					key={image} 
					className={`carousel__image ${imageToUse === i ? "" : AdditionalCarouselClasses.HIDDEN}`}/>)
			}
			<div className="carousel__title">GEORGETOWN</div>
			<div className="carousel__subtitle">RUNNING CLUB</div>
        </div>
    );
}