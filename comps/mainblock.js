export default function MainBlock (props) {
    return (
        <div className="main">
            {props.children}
            <style jsx global>{`
                .main {
                    background-color: white;
                    border-radius: 6px;
                    -webkit-box-shadow: 3px 3px 10px #999;
                    -moz-box-shadow: 3px 3px 10px #999;
                    -o-box-shadow: 3px 3px 10px #999;
                    box-shadow: 3px 3px 10px #999;
                    font-family: 'Open Sans';
                    margin: 1em;
                    padding: 2em;
                }
                .main h1 {
                    color: #05A5D1;
                }
                .main p {
                    font-size: .9em;
                    font-family: 'Open Sans'
                }
            `}</style>
        </div>
    )
}