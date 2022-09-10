import styles from "./ReviewSection.module.css";
import ReviewCard from "./ReviewCard";
import classes from "../Styles/textUnderLine.module.css";

import { useState } from 'react';

const msg = "Everything was perfect, and I would have to say it was the vacation of a life time (...) I will do all I can to promote your company and your services. (...) Thank you so very much for having arranged the magnificent trip we took!! ";






function ReviewSection(props) {

//     const [addReview, setAddReview] = useState(false);


//     function addReviewHandler() {
//         setAddReview(true);
//     }

//     function submitReviewHandler() {
//         setAddReview(false);
//    }

   const reviews=[
    {Rmsg: msg, img:"/Images/profile-img.jpg",name:"Adam", id:1,},
    {Rmsg: msg, img:"/Images/profile-img.jpg" ,name:"Adam", id:2,},
    {Rmsg: msg, img:"/Images/profile-img.jpg" ,name:"Adam", id:3,},
    {Rmsg: msg, img:"/Images/profile-img.jpg" ,name:"Adam", id:4,},
    {Rmsg: msg, img:"/Images/profile-img.jpg"  ,name:"Adam", id:5,},
    {Rmsg: msg, img:"/Images/profile-img.jpg",name:"Adam" , id:6,},


]

    return (
        <section className={styles.container}>
            <p className={classes.text}> Reviews</p>
            <div className={styles.reviews}>
                {reviews.map((rev)=><ReviewCard review={rev.Rmsg} image={rev.img}  name={rev.name}
                id={rev.id} key={rev.id}/>)}
          
            
            </div>
      

<button onClick={()=>props.onAddReview()} >Add Review</button>

          {/* {!addReview && <button onClick={addReviewHandler}>Add Review</button>}  
            <br></br>

            {addReview && <div className={styles.addReview}>
               
                <textarea rows="7" placeholder="  add your review">
                    
                </textarea>
                <button onClick={submitReviewHandler}>submit</button>
            </div>}
 */}

            
           
        </section>
    )

}

export default ReviewSection;
