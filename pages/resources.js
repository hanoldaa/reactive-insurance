import Layout from '../comps/mylayout'
import BannerQuote from '../comps/bannerquote'
import SideBar from '../comps/sidebar'
import MainBlock from '../comps/mainblock'

export default function About() {
    return (
        <Layout>
            <BannerQuote src='../static/resources-stock1.jpeg' quote={`React Health Solutions has assembled a team of the world's top health professionals who are dedicated to your well being.`} />
            <div className="content">
                <MainBlock>
                    <h1>Benefits</h1>
                    <p>React Health Solutions offers the best in class health benefits.</p>
                </MainBlock>
                <SideBar header="NEWSROOM">
                </SideBar>
            </div>
        </Layout>
    )
}