import BannerBtn from './bannerBtn'
import BannerHeader from './bannerHead'
import BannerImg from './bannerImage'
import BannerPara from './bannerPara'
import classes from './bannerSection.module.css'


function BannerSection(){
    return(
        <div className={classes.section}>
            <div className={classes.section1}>
             <BannerHeader/>
             <BannerPara/>
             <BannerBtn/>

            </div>
            <div className={classes.section2}>
            <BannerImg/>
            </div>
 
        </div>
    )
}
export default BannerSection