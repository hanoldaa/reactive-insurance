import Header from './header'
import Navbar from './navbar'

const Layout =  props => {
    return (
        <div>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Ubuntu" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
            <Header />
            <Navbar />
            <div className="page">
                {props.children}
            </div>
            <style jsx global>{`
                body {
                    margin: 0;
                }

                .page {
                    background-color: #EEE;
                }
            `}</style>
        </div>
    )
}

export default Layout