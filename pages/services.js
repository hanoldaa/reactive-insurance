import Layout from '../comps/mylayout'
import BannerQuote from '../comps/bannerquote'
import SideBar from '../comps/sidebar'

export default function About() {
    return (
        <Layout>
            <BannerQuote src='../static/services-stock1.jpeg' quote={`React Health Solutions has assembled a team of the world's top health professionals who are dedicated to your well being.`} />
            <div className="content">
                <div className="main">
                    <h1>What We Do</h1>
                    <p>React Health Solutions offers the best in class health benefits.</p>
                </div>
                <SideBar header="My Health Advocate">
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