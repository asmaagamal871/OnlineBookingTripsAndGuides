import styles from './StarRating.module.css';

function StarRating() {
    return (
        <section className={styles.starWidget}>
           
        <input type="radio" name="rate" id="s-5"/>
        <label for="s-5"><i class="fas fa-star" id="s5"></i></label>

        <input type="radio" name="rate" id="s-4"/>
        <label for="s-4"><i class="fas fa-star"></i></label>

        <input type="radio" name="rate" id="s-3"/>
        <label for="s-3"><i class="fas fa-star"></i></label>
        
        <input type="radio" name="rate" id="s-2"/>
            <label for="s-2"><i class="fas fa-star"></i></label>
            
        <input type="radio" name="rate" id="s-1"/>
        <label for="s-1"><i class="fas fa-star"></i></label>

    
</section >
    
    
    )
}

export default StarRating;