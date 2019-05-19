import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}
const Header = () => {
    return(
        <header className="header-container">
            <div className="logo">
                <img src="../static/logo.png"></img>
            </div>
            <div className="header-button">
                <a className="login">Log In</a>
            </div>
            <div className="header-button">
                <a className="register">Register</a>
            </div>
            <style jsx>{`
                .header-container {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 1em;
                    padding: 0 0 0 1em;
                }
                .header-container .header-button {
                    align-self: flex-start;
                    flex: 0 1;
                    margin: .5em 0.8em 0 0;
                }
                .header-container > * {
                    flex: 1 auto;
                }
                .logo img {
                    display: block;
                    object-fit: contain;
                    max-width: 300px;
                    width: 100%;
                    height: 100%;
                }
                a {
                    cursor: pointer;
                    display: inline-block;
                    font-family: Ubuntu;
                    font-size: 1.2em;
                    margin: 0 .25em;
                    text-decoration: none;
                    white-space: nowrap;
                }
                a.register {
                    background-color: #05A5D1;
                    border-radius: 2em;
                    color: white;
                    padding: .2em .75em;
                    -webkit-transition: filter .3s;
                    -moz-transition: filter .3s;
                    -o-transition: filter .3s;
                    transition: filter .3s;
                }
                a.login {
                    background-color: tranparent;
                    border-bottom: 2px solid #333;
                    color: #333;
                    padding: 0;
                    -webkit-transition: color .3s, border-bottom-color .3s;
                    -moz-transition: color .3s, border-bottom-color .3s;
                    -o-transition: color .3s, border-bottom-color .3s;
                    transition: color .3s, border-bottom-color .3s;
                }
                a.register:hover {
                    filter: brightness(80%);
                }
                a.login:hover {
                    color: #000;
                    border-bottom-color: #000;
                }

                @media screen and (min-width : 720px) {
                    .header-container {
                        flex-direction: row;
                        margin-bottom: -1.8em;
                    }
                    .header-container .header-button {
                        flex: 0 1;
                        align-self: flex-start;
                        margin: .5em 0.8em 0 0;
                    }
                }
            `}</style>
        </header>
    )
}

export default Header