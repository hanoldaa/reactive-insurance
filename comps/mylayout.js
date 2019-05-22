import Header from './header'

const Layout =  props => {
    return (
        <div>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Ubuntu" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
            <Header />
            <div className="page">
                {props.children}
            </div>
            <div className="credit">
                Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </div>
            <style jsx global>{`
                html, body, #__next {
                    height: 100%;
                }

                body {
                    margin: 0;
                    background-color: #EEE;
                }
                .content {
                    display: flex;
                    flex-flow: row wrap;   
                }
                .content > * {
                    flex: 1 100%;
                }

                @media all and (min-width: 680px) {
                    .content .main {
                        order: 2; 
                        flex: 2 0px;
                    }
                }
                .credit {
                    background-color: #333;
                    color: #EEE;
                    font-size: .7em;
                    font-family: 'Open Sans';
                    -webkit-box-shadow: 0 0 6px #333;
                    -moz-box-shadow: 0 0 6px #333;
                    box-shadow: 0 0 6px #333;
                    padding: 1em;
                }

                .credit a {
                    color: #66F;
                }
            `}</style>
        </div>
    )
}

export default Layout