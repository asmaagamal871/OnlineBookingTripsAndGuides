
import Partners from "../components/AboutUs/Partners";
import style from "../components/Styles/AboutUs.module.css";
import styles from "../components/Styles/textUnderLine.module.css";

function AboutUs() {


    return (
        <div>
            <h1 className={styles.text}>About Us</h1>
            <div className={style.row}>
                <p className={style.title}>our values</p>
                <div className={style.col} >
                    <ul className={style.list}>
                        <li> 
                            <img src="/Images/air.png" alt="icon" className={style.icon} />Act with purpose</li>
                        <li>
                        <img src="/Images/air.png" alt="icon" className={style.icon}/> do what is right</li>
                        <li> 
                        <img src="/Images/air.png" alt="icon" className={style.icon}/>
                        we operate openly and foster transparency</li>

                        <li>
                        <img src="/Images/air.png" alt="icon" className={style.icon}/>
                            seek solutions and achieve results</li>
                        <li>
                        <img src="/Images/air.png" alt="icon" className={style.icon}/>
                        embrace change and fast innovation</li>



                    </ul>
                </div>
            </div>



            <div className={style.row}>
                <div className={style.col}>
                    <ul className={style.list}>
                        <li> 
                            <img src="/Images/air.png" alt="icon" className={style.icon} />
                            provide top level guides and companies</li>
                        <li> 
                            <img src="/Images/air.png" alt="icon" className={style.icon} />
                            provide high quiality and suistainable travel experince</li>
                        <li>
                            <img src="/Images/air.png" alt="icon" className={style.icon} />
                            show egypt through local egyptian eyes</li>

                    </ul>

                </div>
                <p className={style.title}> our mission</p>
            </div>


            <div className={style.row}>
                <p className={style.title}>our vision</p>
                <div className={style.col}>
                <ul className={style.list}>
                <li>
                            <img src="/Images/air.png" alt="icon" className={style.icon} />
                            be Egypt's most trusted travel managment company</li>
                        </ul>
                  
                </div>
            </div>


            <Partners />
        </div>
    )
}


export default AboutUs;