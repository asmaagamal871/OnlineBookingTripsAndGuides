import react, { useState } from "react";
import styles from "./ImageGallary.module.css";
import DisplayedImage from "./DisplayedImage";
const ImageGallery = (props) => {
    const [image, setImage] = useState(props.fimage);

    const changeImageHandler = (src) => {
        setImage(src);
      };
return(
<div>
<div>
<DisplayedImage dImage={image}/>

</div>


<div className={styles.smallImage}>
   

    <img src={props.image} onClick={() => changeImageHandler((props.image))} />
    
    </div>
    </div>
)
};
export default ImageGallery;
