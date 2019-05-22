export default function SideBlurb (props) {
    return (
        <div className={"blurb" + (props.emphasized ? " emphasized" : "")}>
            {props.children}
            <style jsx global>{`
            .blurb {
                border-radius: 5px;
                background-color: white;
                box-shadow: 2px 3px 10px #999;
                color: black;
                font-family: 'Open Sans';
                font-size: .8em;
                font-weight: 400;
                margin: .5em 1em 2em 1em;
                padding: 1em;
                text-align: justify;
            }
            .blurb.emphasized {
                color: white;
                background-color: #05a5d1;
                box-shadow: 2px 3px 10px #036a86;
            }
            .blurb h1 {
                font-size: 1em;
                text-align: center;
            }
            .blurb a {
                display: block;
                text-align: center;
                font-weight: bold;
                font-size: 1.1em;
                text-decoration: none;
            }
            `}</style>
        </div>
    )
}