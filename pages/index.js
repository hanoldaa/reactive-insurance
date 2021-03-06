import Layout from '../comps/mylayout'
import BannerQuote from '../comps/bannerquote'
import SideBar from '../comps/sidebar'
import SideBlurb from '../comps/sideblurb'
import MainBlock from '../comps/mainblock'

const Index = (props) => (
    <Layout>
        <BannerQuote src='../static/home-stock1.jpg' quote="React Health Solutions aggressively advocates for members' health needs, provides knowledge, and skillfully promotes early care." />
        <div className="content">
            <div className="column">
                <div className="row">
                    <div className="card">
                        <img src="../static/doctor-icon.png"></img>
                        <button>Find a Doctor  ></button>
                    </div>
                    <div className="card">
                        <img src="../static/pills-icon.png"></img>
                        <button>Drug Lookup  ></button>
                    </div>
                    <div className="card">
                        <img src="../static/plan-icon.png"></img>
                        <button>Find a Plan  ></button>
                    </div>
                    <div className="card">
                        <img src="../static/chat-icon.png"></img>
                        <button>Live Chat  ></button>
                    </div>
                </div>
            </div>
            <SideBar header="ANNOUNCEMENTS">
                <SideBlurb emphased={false}>
                    <h1>IMPORTANT MEASLES INFORMATION</h1>
                    <p>The CDC has released a new document containing important information about the measles virus.</p>
                    <a href="https://www.cdc.gov/measles/downloads/IntroToMeaslesSlideSet.pdf" target="_blank">Read It Here</a>
                </SideBlurb>
                <SideBlurb emphasized={true}>
                    <p>React Health Solutions is passionate about keeping members healthy.</p>
                    <ul>
                        <li>We believe in the wisdom of early care.</li>
                        <li>We remind members when it's time to take advantage of their covered screenings, tests, and check-ups.</li>
                        <li>We offer unique tools to keep members from becoming ill and, when they get sick, return them to health quickly.</li>
                    </ul>
                    <p>Members make their own medical decisions. But React Health Solutions ensures that the member's choice is always an informed one.</p>
                </SideBlurb>
            </SideBar>
        </div>
        <style jsx>{`
            .column {
                display: flex;
                flex-direction: column;
            }
            .column > * {
                flex: 0 1 auto;
            }
            .row {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
            }
            .row > * {
                flex: 0 1 0px;
            }
            .card {
                background-color: white;
                border-radius: 6px;
                -webkit-box-shadow: 2px 3px 10px #999, 0px 0px 6px #CCC;
                -moz-box-shadow: 2px 3px 10px #999, 0px 0px 6px #CCC;
                box-shadow: 2px 3px 10px #999, 0px 0px 6px #CCC;
                cursor: pointer;
                font-family: 'Open Sans';
                margin: 1em;
                padding: 2em;
            }
            .card img {
                display: block;
                width: 128px;
            }
            .card button {
                background-color: #05a5d1;
                border: none;
                border-radius: 1em;
                color: white; 
                cursor: pointer;
                display: block;
                font-family: 'Open Sans';
                font-size: .9em;
                line-height: 2em;
                margin-top: 1em;
                padding: 0 .5em;
                text-align: center;
                width: 128px;
            }

            @media all and (min-width: 680px) {
                .column {
                    order: 2; 
                    flex: 2 0px;
                }
            }
        `}</style>
    </Layout>
)

export default Index