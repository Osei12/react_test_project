import React from 'react'

function Home() {
    return (
        <div>
            <div className="wrapper">
                <header>
                    <img src="assets/images/I4G-Icon-Color-985x1024.png" alt className="logo" />
                    <h3>Ingressive <br />for good</h3>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Updates</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </nav>
                    <a href="#" className="cta"><button>Donate</button></a>
                    <a href="#" className="cta"><button>Community</button></a>
                </header>
                <div className="hero-section">
                    <div className="container">
                        <div className="left">
                            <div className="title">
                                <h1>Lend A Hand</h1>
                                <p className="text">Together we can build strength, stability,<br />
                                    and self reliance in African tech talents.
                                </p>
                                <a href="#" className="cta"><button>Donate Now</button></a>
                                <img src="assets/images/play (1).png" alt />
                                <span>Watch Now</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/images/hero-image.png" alt className="person" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="bottom-hero-area">
                            <div className="rectangle">
                                <div className="row">
                                    <div className="col">
                                        <img src="assets/images/datacamp-5f96b2ffd0ddc.webp" alt />
                                    </div>
                                    <div className="col">
                                        <img src="assets/images/cursera.png" alt />
                                    </div>
                                    <div className="col" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home