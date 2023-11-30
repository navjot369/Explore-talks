import './GlimpseSec.css';
import Img1 from './Images/img1.jpeg';
import Img2 from './Images/img2.jpeg';
import Img3 from './Images/img3.jpeg';
import Img4 from './Images/img4.jpeg';
import Img5 from './Images/img5.jpeg';
import Img6 from './Images/img6.jpeg';
import Img7 from './Images/img7.jpeg';
import Img8 from './Images/img8.jpeg';

export default function Glimpse() {
    return(<div className="glimpse-cont-main">
        <div className="glimpse-title"><span className="red-part">Glimpse</span> of Explore Talks</div>
        <div className="img-gallery-cont">
            <div className="img-row">
                <img src={Img1} alt="Explore Talks" className="glimpse-img"/>
                <img src={Img7} alt="Explore Talks" className="glimpse-img"/>
                <img src={Img3} alt="Explore Talks" className="glimpse-img"/>
                <img src={Img5} alt="Explore Talks" className="glimpse-img"/>
            </div>
            <div className="img-row">
                <img src={Img4} alt="Explore Talks" className="glimpse-img"/>
                <img src={Img6} alt="Explore Talks" className="glimpse-img"/>
                <img src={Img2} alt="Explore Talks" className="glimpse-img"/>
                <img src={Img8} alt="Explore Talks" className="glimpse-img"/>
            </div>
        </div>
    </div>);
}