import Layout from '../comps/mylayout'

export default function About() {
    return (
        <Layout>
            <div className="banner-quote">
                <p>React Health Solutions has assembled a team of the world's top health professionals who are dedicated to your well being.</p>
            </div>
            <div className="content">
                <div className="app-info">
                    <p className="app-info-header-text">My Health Advocate</p>
                </div>
                <div className="main">
                    <h1>What We Do</h1>
                    <p>React Health Solutions offers the best in class health benefits.</p>
                </div>
            </div>
            <style jsx>{`
            .content {
                display: flex;
                flex-flow: row wrap;   
                font-family: Ubuntu;
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
                margin: 1em;
                padding: 2em;
            }
            .app-info-header {
                margin-bottom: 2em;
            }
            .app-info-header-text {
                color: #05A5D1;
                font-family: Ubuntu;
                font-size: .9em;
                font-weight: bold;
                letter-spacing: .3em;
                text-align: center;
                margin: .2em 0;
            }
            .main h1 {
                color: #05A5D1;
            }
            .main p {
                font-size: .9em;
                font-family: 'Open Sans'
            }
            .banner-quote {
                background: 
                    linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
                    url('../static/services-stock1.jpeg');
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

            @media all and (min-width: 680px) {
                .content .app-info { 
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
}