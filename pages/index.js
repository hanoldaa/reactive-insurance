import Layout from '../comps/mylayout'

const Index = (props) => (
    <Layout>
        <div className="banner-quote">
            <p>React Health Solutions aggressively advocates for members' health needs, provides knowledge, and skillfully promotes early care.</p>
        </div>
        <div className="content">
            <div className="main">
                <p>
                    Your health is important. That’s why we offer the React Health plan to provide you and your family with the health coverage and benefits you need so you have peace of mind and can follow your calling.
                </p>
            </div>
            <div className="announcements">
                <p className="announcement-header">ANNOUNCEMENTS</p>
                <div className="blurb">
                    <p>React Health Solutions is passionate about keeping members healthy.</p>
                    <ul>
                        <li>We believe in the wisdom of early care.</li>
                        <li>We remind members when it's time to take advantage of their covered screenings, tests, and check-ups.</li>
                        <li>We offer unique tools to keep members from becoming ill and, when they get sick, return them to health quickly.</li>
                    </ul>
                    <p>Members make their own medical decisions. But React Health Solutions ensures that the member's choice is always an informed one.</p>
                </div>
            </div>
        </div>
        <style jsx>{`
            .banner-quote {
                background: 
                    linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
                    url('../static/home-stock1.jpg');
                background-attachment: fixed;
                background-size: cover;
                background-position: 0 -20px;
            }
            .banner-quote p {
                color: white;
                font-family: Ubuntu;
                font-size: 2em;
                font-weight: bold;
                padding: 10% 10%;
            }
            .content {
                display: flex;
                flex-flow: row wrap;   
            }
            .content > * {
                flex: 1 100%;
            }
            .main {
                background-color: white;
                border-radius: 6px;
                -webkit-box-shadow: 3px 3px 10px #999;
                -moz-box-shadow: 3px 3px 10px #999;
                -o-box-shadow: 3px 3px 10px #999;
                box-shadow: 3px 3px 10px #999;
                font-family: 'Open Sans';
                margin: 1em;
                padding: 2em;
            }
            .announcement-header {
                color: #05A5D1;
                font-family: Ubuntu;
                font-size: .9em;
                font-weight: bold;
                letter-spacing: .3em;
                text-align: center;
            }
            .blurb {
                border-radius: 5px;
                background-color: #05a5d1;
                box-shadow: 2px 3px 10px #036a86;
                color: white;
                font-family: 'Open Sans';
                font-size: .8em;
                margin: .5em 1em;
                padding: 1em;
            }

            @media all and (min-width: 680px) {
                .content .announcements { 
                    flex: 1 0px; 
                    order: 1; 
                }
                .content .main {
                    order: 2; 
                    flex: 2 0px;
                }
            }
        `}</style>
    </Layout>
)

export default Index