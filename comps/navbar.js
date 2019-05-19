import LinkActive from 'next-link-active'

export default function Navbar() {
    return(
        <nav>
            <ul>
                <li>
                    <LinkActive href="/" passHref>
                        {active => <a className={active ? 'active' : ''}>Home</a>}
                    </LinkActive>
                </li>
                <li>
                    <LinkActive href="/about" passHref>
                        {active => <a className={active ? 'active' : ''}>About Us</a>}
                    </LinkActive>
                </li>
                <li>
                    <LinkActive href="/services" passHref>
                        {active => <a className={active ? 'active' : ''}>Services</a>}
                    </LinkActive>
                </li>
                <li>
                    <LinkActive href="/resources" passHref>
                        {active => <a className={active ? 'active' : ''}>Health Resources</a>}
                    </LinkActive>
                </li>
            </ul>
            <style jsx>{`
                nav {
                    border-bottom: 1px solid #CCC;
                    font-family: Ubuntu;
                    padding: 0 1em;
                }
                ul {
                    display: flex;
                    justify-content: flex-end;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                li {
                    display: block;
                    margin-left: 1.75em;
                    height: 1.75em;
                    text-align: center;
                }
                a {
                    color: #444;
                    display: inline-block;
                    font-family: Ubuntu;
                    font-size: 1em;
                    text-decoration: none;
                    vertical-align: middle;
                    height: 100%;
                    white-space: nowrap;
                }
                a.active {
                    border-bottom: 2px solid #05A5D1;
                    color: #05A5D1;
                }
            `}</style>
        </nav>
    )
}