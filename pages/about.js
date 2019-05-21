import Layout from '../comps/mylayout'
import BannerQuote from '../comps/bannerquote'
import SideBar from '../comps/sidebar'

export default function About() {
    return (
        <Layout>
            <BannerQuote src={'../static/about-stock1.jpg'} quote={`React Health Solutions has assembled a team of the world's top health professionals who are dedicated to your well being.`} />
            <div className="content">
                <SideBar className="board">
                    <div className="board-header">
                        <p className="board-header-text">BOARD</p>
                        <p className="board-header-text">OF</p>
                        <p className="board-header-text">DIRECTORS</p>
                    </div>
                    <div>
                        <img className="portrait" src='../static/about-face2.jpg'></img>
                        <p className="board-name">Owen Kennedy</p>
                        <p className="board-position">Chairman</p>
                    </div>
                    <div>
                        <img className="portrait" src='../static/about-face1.jpg'></img>
                        <p className="board-name">Coleen Porter</p>
                        <p className="board-position">Vice Chairman</p>
                    </div>
                    <div>
                        <img className="portrait" src='../static/about-face3.jpg'></img>
                        <p className="board-name">Jake Ferguson</p>
                        <p className="board-position">Chief Physician's Officer</p>
                    </div>
                </SideBar>
                <div className="main">
                    <h1>Who We Are</h1>
                    <p>React Health Solutions is a strong health care advocate. It is not an insurance company that makes money by denying healthcare claims. Sadly, that is all too common. React Health Solutions is a health benefits management company managing a unique design of health benefit programs for public and private sector employers. Although it is not an insurance company, React Health Solutions offers plan sponsors and their employees a customized and complete administrative program for healthcare coupled with insurance protection from a rated carrier. React Health Solutions provides plan sponsors with what they need—a turnkey program of service providers offering state-of-the-art TPA, disease management and network services.</p>
                    <p>We've brought together a health care program like no other, with the best doctors, hospitals, and benefits. We even have special tools so members can get the early care that keeps them healthy and on the move. We remind them when it is time to take advantage of covered screenings, tests, and check-ups. Information available through My Health Advocate is a unique way to keep members from becoming ill and, when they get sick, return them to health quickly.</p>
                    <h1>Our History</h1>
                    <p>React Health Solutions was founded with the goal of transforming health care. React Health Solutions aggressively advocates for members' health needs, provides knowledge, and skillfully promotes early care. React Health Solutions informs members of signs of illness when they first emerge, making it easy for them to go for testing, screenings, and check-ups, and act on the results. As a result, they can have healthier, happier and more productive lives. An added benefit is that employers and employees alike can save substantial amounts of money-React Health Solutions's win-win solution.</p>
                </div>
            </div>
            <style jsx>{`
            .board-header {
                margin-bottom: 2em;
            }
            .board-header-text {
                color: #05A5D1;
                font-family: Ubuntu;
                font-size: .9em;
                font-weight: bold;
                letter-spacing: .3em;
                text-align: center;
                margin: .2em 0;
            }
            .portrait {
                border-radius: 50%;
                -webkit-box-shadow: 2px 3px 10px 2px #999;
                -moz-box-shadow: 2px 3px 10px 2px #999;
                -o-box-shadow: 2px 3px 10px 2px #999;
                box-shadow: 2px 3px 10px 2px #999;
                display: block;
                margin-left: auto;
                margin-right: auto;
                object-fit: contain;
                width: 50%;
            }
            .board-name, .board-position {
                font-family: Ubuntu;
                margin: 0;
                text-align: center;
            }
            .board-name {
                padding-top: 1em;
                font-weight: 700;
            }
            .board-position {
                margin-bottom: 2em;
            }
            .main {
                background-color: white;
                border-radius: 6px;
                -webkit-box-shadow: 3px 3px 10px #999;
                -moz-box-shadow: 3px 3px 10px #999;
                -o-box-shadow: 3px 3px 10px #999;
                box-shadow: 3px 3px 10px #999;
                margin: 1em;
                padding: 2em;
            }
            .main h1 {
                color: #05A5D1;
            }
            .main p {
                font-size: .9em;
                font-family: 'Open Sans'
            }
            `}</style>        
        </Layout>
    )
}