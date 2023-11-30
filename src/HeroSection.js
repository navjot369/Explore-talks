import './HeroSection.css';

export default function HeroSection() {
    return(<div className="hero-container">
        <div className="fixed-upper">
        <Navbar />
        </div>
        <div className="hero-main-cont">
            <div className="hero-inner-cont">
                <div className="tagline">Inspiring Growth,</div>
                <div className="tagline">Exploring Possibilities</div>
                <div className="tagDesp">All you need is to <span className="explore">Explore</span></div>
                <div className="explore-more-button">
                    <button>Explore More</button>
                </div>
            </div>
        </div>
    </div>);
}

function Navbar() {
    return(
        <div className="navbar-container">
            <div className="logo-container">
                Logo
            </div>
            <div className="menu-container">
                <a href="/" className="menu-links">Home</a>
                <a href="/" className="menu-links">About</a>
                <a href="/" className="menu-links">Our Speakers</a>
            </div>
        </div>
    );
}