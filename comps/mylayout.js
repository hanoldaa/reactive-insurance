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
            `}</style>
        </div>
    )
}

export default Layout