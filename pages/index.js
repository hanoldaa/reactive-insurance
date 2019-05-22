import Layout from '../comps/mylayout'
import BannerQuote from '../comps/bannerquote'
import SideBar from '../comps/sidebar'
import SideBlurb from '../comps/sideblurb'

const Index = (props) => (
    <Layout>
        <BannerQuote src='../static/home-stock1.jpg' quote="React Health Solutions aggressively advocates for members' health needs, provides knowledge, and skillfully promotes early care." />
        <div className="content">
            <div className="main">
                <p>
                    Your health is important. That’s why we offer the React Health plan to provide you and your family with the health coverage and benefits you need so you have peace of mind and can follow your calling.
                </p>
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
        `}</style>
    </Layout>
)

export default Index