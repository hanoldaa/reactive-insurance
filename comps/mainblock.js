export default function MainBlock (props) {
    return (
        <div className="main">
            {props.children}
            <style jsx global>{`
                .main {
                    background-color: white;
                    border-radius: 6px;
                    -webkit-box-shadow: 2px 3px 10px #999, 0px 0px 6px #CCC;
                    -moz-box-shadow: 2px 3px 10px #999, 0px 0px 6px #CCC;
                    box-shadow: 2px 3px 10px #999, 0px 0px 6px #CCC;

                    font-family: 'Open Sans';
                    margin: 1em;
                    padding: 2em;
                }
                .main h1 {
                    color: #05A5D1;
                    margin-bottom: 0;
                }
                .main h2 {
                    color: #036a86;
                    size: 1em;
                    margin-bottom: 0;
                }
                .main p {
                    font-size: .9em;
                    font-family: 'Open Sans';
                    margin-top: .2em;
                }
            `}</style>
        </div>
    )
}