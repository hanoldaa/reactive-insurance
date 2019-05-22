import React from 'react'
import Layout from '../comps/mylayout'
import BannerQuote from '../comps/bannerquote'
import SideBar from '../comps/sidebar'
import SideBlurb from '../comps/sideblurb'
import MainBlock from '../comps/mainblock'
import Parser from 'rss-parser'

export default class About extends React.Component {

    constructor(props){
        super(props)
        this.state={news: []}
        this.parser = new Parser()
        this.CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    }

    componentDidMount() {
        this.parser.parseURL(this.CORS_PROXY + 'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/consumers/rss.xml')
            .then(feed => {
                console.log(feed.items)
                var key = 0;
                let items = feed.items.slice(0, 5).map(item => {
                    return <div key={key++}>
                        <h2><a href={item.link}>{item.title}</a></h2>
                        <p>{item.contentSnippet}</p>
                    </div>
                })
                this.setState({news: items})
            }).catch(error => console.log(error));
    }

    render() {
        return (
            <Layout>
                <BannerQuote src='../static/resources-stock1.jpeg' quote={`React Health Solutions has assembled a team of the world's top health professionals who are dedicated to your well being.`} />
                <div className="content">
                    <MainBlock>
                        <h1>Understanding Health Insurance</h1>
                        <h2>What is health insurance coverage?</h2>
                        <p>Health insurance coverage helps you pay for medical care and gives you access to a network of doctors and hospitals.</p>

                        <h2>How does health insurance work?</h2>
                        <p>First, you buy a health plan. A health plan determines the types of medical services (benefits) you are covered for, the doctors and hospitals you can visit, and how much you will pay when you get care.</p>
                        <p>When you need medical care, you visit a doctor or hospital in your plan’s provider network. A network is a group of doctors, hospitals, and healthcare providers that have agreed with the health insurance company to accept certain amounts for each service as payment in full. Your costs for care are usually lower when you use network providers compared with using non-network providers.</p>
                        <p>Healthcare coverage isn’t just for when you’re sick. Preventive care services can help keep you and your family healthy with annual health exams and immunizations like flu shots.</p>

                        <h2>What do I pay monthly?</h2>
                        <p>You’ll pay a fixed monthly rate for your health insurance plan. The amount depends on the plan you choose, where you live, and the age of each person on the policy. The lower your plan’s monthly rate, the more you typically pay when you see the doctor, and vice versa. Identifying how often you see a doctor can help you choose the right plan for you.</p>

                        <h2>What do I pay when I see a doctor?</h2>
                        <p>It depends on the service and your plan’s benefits. Some services have a copayment, which is a fixed dollar amount. Other services have a coinsurance, which is a fixed percentage amount. When you get care from a network* doctor, you pay the copayment or coinsurance, and the health plan pays the rest up to the allowable amount.</p>
                        <p>Some health plans have an annual deductible, which is the amount of money you pay for services before the coinsurance and health plan begins paying for them.</p>
                        <p>To protect you and your family from unexpected costs, most plans have an annual out‑of‑pocket maximum. Once you reach the out‑of‑pocket maximum, your health plan covers 100% up to the allowable amount for most covered medical services.</p>
                        <br />
                        <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/DBTmNm8D-84" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </MainBlock>
                    <SideBar header="NEWSROOM">
                        <SideBlurb>
                            {this.state.news}
                        </SideBlurb>
                    </SideBar>
                </div>
                <style jsx global>{`
                `}</style>
            </Layout>
        )
    }
}