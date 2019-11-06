import * as React from 'react';
import $ from 'jquery';
import "../../Styles/AppStyles.css";
import { AdditionalCarouselClasses } from '../Constants/Classes';

// TODO: Get images from database or something similar and pass as prop.
const images = ["https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/gatorzone.com/images/2016/2/13/Florida_Raz_Invite_136.jpg", "https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/gatorzone.com/images/2017/5/31/Taylor_Tubbs_DL.jpg"]

export const ProfileCarousel: React.FunctionComponent = () => {
	const [imageToUse, setImageToUse] = React.useState(0);
	const [mediaStyles, setMediaHeight] = React.useState({});
	const imageToUseRef = React.useRef(imageToUse);
	const mediaStylesRef = React.useRef(mediaStyles);
    imageToUseRef.current = imageToUse;
    React.useEffect(() => {
        const timer = setInterval(() => {
          setImageToUse(imageToUseRef.current === images.length - 1 ? 0 : imageToUseRef.current + 1);
        }, 5000);
        return () => clearInterval(timer);
      }, []);
    React.useEffect(() => {
		window.addEventListener("resize", () => {
            const width = $(".profile-carousel__image")[0].scrollWidth;
            console.log(width * .66);
			setMediaHeight({ ...mediaStylesRef, height: `${width * .66}px` });
		});
    }, []); // might wanna add ,[] here to prevent constant resizing.
    console.log(mediaStyles);
    return (
        <div className="profile-carousel__wrapper" style={mediaStyles}>
			{images.map((image, i) => 
                <img 
                onLoad={() => {
                    const width = $(".profile-carousel__image")[0].scrollWidth;
		            setMediaHeight({ ...mediaStylesRef, height: `${width * .66}px` });
                }}
                alt="" 
                src={image} 
                key={image} 
                className={`profile-carousel__image ${imageToUse === i ? "" : AdditionalCarouselClasses.HIDDEN}`}/>)
                }
        </div>
    );
}