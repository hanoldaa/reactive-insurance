import Layout from '../comps/mylayout'
import BannerQuote from '../comps/bannerquote'
import SideBar from '../comps/sidebar'
import MainBlock from '../comps/mainblock'
import SideBlurb from '../comps/sideblurb';

export default function About() {
    return (
        <Layout>
            <BannerQuote src='../static/services-stock1.jpeg' quote={`React Health Solutions has assembled a team of the world's top health professionals who are dedicated to your well being.`} />
            <div className="content">
                <MainBlock>
                    <h1>What We Do</h1>
                    <p>React Health Solutions offers the best in class health benefits.</p>
                </MainBlock>
                <SideBar header="MY HEALTH MANAGER™">
                    <SideBlurb emphasized={true}>
                        <p>With My Health Manager™, you get instant access to all of our features.</p>
                        <ul>
                            <li>Compare and select plans.</li>
                            <li>Manage your dependents and beneficiaries.</li>
                            <li>View important documents.</li>
                        </ul>
                        <img src="../static/responsive-icon.png"></img>
                        <p>Log in to access My Health Manager™</p>
                    </SideBlurb>
                </SideBar>
            </div>
            <style jsx>{`
            `}</style>        
        </Layout>
    )
}