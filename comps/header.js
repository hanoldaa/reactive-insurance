import LinkActive from 'next-link-active'

const linkStyle = {
    marginRight: 15
}
const Header = () => {
    return(
        <header className="header-container">
            <div className="header-button" id="login">
                <a className="login">Log In</a>
            </div>
            <div className="header-button" id="register">
                <a className="register">Register</a>
            </div>
            <div className="logo">
                <img src="../static/logo2.png"></img>
            </div>
            <div className="header-button">
                <LinkActive href="/" passHref>
                    {active => <a className={active ? 'active' : ''}>Home</a>}
                </LinkActive>
            </div>
            <div className="header-button">
                <LinkActive href="/about" passHref>
                    {active => <a className={active ? 'active' : ''}>About Us</a>}
                </LinkActive>
            </div>
            <div className="header-button">
                <LinkActive href="/services" passHref>
                    {active => <a className={active ? 'active' : ''}>Services</a>}
                </LinkActive>
            </div>
            <div className="header-button">
                <LinkActive href="/resources" passHref>
                    {active => <a className={active ? 'active' : ''}>Health Resources</a>}
                </LinkActive>
            </div>
            <style jsx>{`
                .header-container {
                    display: flex;
                    flex-flow: row  wrap;
                    font-family: Ubuntu;
                    justify-content: center;
                    margin-top: 1em;
                    margin-bottom: 1em;
                    padding: 0 0 0 1em;
                }
                .header-container .logo {
                    margin: 0 1em 0 1em;
                    flex: 1 100%;
                }
                .header-container .header-button {
                    align-self: center;
                    flex: 0 1;
                    margin: .5em 0.8em 0 0;
                }
                .header-container .header-button#login {
                    flex: 1 2 auto;
                    text-align: right;
                    width: 30%;
                }
                .logo img {
                    display: block;
                    object-fit: contain;
                    width: 100%;
                    height: 100%;
                }
                .header-button a {
                    color: #444;
                    cursor: pointer;
                    display: inline-block;
                    font-family: Ubuntu;
                    margin: 0 .25em;
                    text-decoration: none;
                    white-space: nowrap;
                }
                .header-button a.active {
                    border-bottom: 2px solid #05A5D1;
                    color: #05A5D1;
                }
                .header-button a.register {
                    background-color: #05A5D1;
                    border-radius: 2em;
                    color: white;
                    margin-left: 0;
                    padding: .4em .75em;
                    -webkit-transition: filter .3s;
                    -moz-transition: filter .3s;
                    -o-transition: filter .3s;
                    transition: filter .3s;
                }
                .header-button a.login {
                    background-color: tranparent;
                    border: 1px solid black;
                    border-radius: 2em;
                    color: #333;
                    margin-left: 1em;
                    margin-right: 0;
                    padding: .4em .75em;
                    -webkit-transition: color .3s, border-bottom-color .3s;
                    -moz-transition: color .3s, border-bottom-color .3s;
                    -o-transition: color .3s, border-bottom-color .3s;
                    transition: color .3s, border-bottom-color .3s;
                }
                .header-button a.register:hover {
                    filter: brightness(80%);
                }
                .header-button a.login:hover {
                    color: #000;
                    border-bottom-color: #000;
                }

                @media screen and (min-width : 720px) {
                    .header-container {
                        margin-bottom: -1.8em;
                        flex-flow: row nowrap;
                    }
                    .header-container .logo {
                        flex: 1 auto;
                    }
                    .header-container .logo img{
                        max-width: 300px;
                    }
                    .header-container .header-button {
                        flex: 0 1;
                        align-self: center;
                        margin: .5em 0.8em 0 0;
                    }
                    .header-container .header-button#login {
                        order: 2;
                        flex: 0 1;
                        width: auto;
                    }            
                    .header-button#register {
                        order: 3;
                    }                    
                }
            `}</style>
        </header>
    )
}

export default Header