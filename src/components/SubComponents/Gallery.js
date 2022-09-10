import styles from "./ImageGallary.module.css";
import react, { useState } from "react";
const Gallery = () => {
  const images = [
    { image: "/Images/Gallery/abuabas.png" },
    { image: "/Images/Alexandria/form3.jpg" },
    { image: "/Images/Alexandria/pompey's pillar.jpg" },
    { image: "/Images/Alexandria/the royal jewelry.jpg" },
    { image: "/Images/Alexandria/Montaza-palace.jpg" },
  ];

  const [image, setImage] = useState(images[0].image);

  const changeImageHandler = (src) => {
    setImage(src);
    console.log(src);
  };

  return (
    <div className={styles.allGallery}>
      
      <div className={styles.dImageDiv}>
      
    
        <img src={image} className={styles.dImage} />
      </div>
      
      
<div className={styles.allSmallImages}>
      <div className={styles.smallImages}>
      
      
      
        {images.map((img) => 
          <img
            src={img.image}
            onClick={() => changeImageHandler(img.image)}
            className={styles.smallImage}
          />
        )}
      </div>
      </div>
    </div>
  );
};
export default Gallery;
