export default function SideBlurb (props) {
    return (
        <div className={"blurb" + (props.emphasized ? " emphasized" : "")}>
            {props.children}
            <style jsx global>{`
            .blurb {
                border-radius: 5px;
                background-color: white;
                -webkit-box-shadow: 2px 3px 10px #999, 0px 0px 6px #999;
                -moz-box-shadow: 2px 3px 10px #999, 0px 0px 6px #999;
                box-shadow: 2px 3px 10px #999, 0px 0px 6px #999;
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
                -webkit-box-shadow: 2px 3px 10px #999, 0px 0px 6px #999;
                -moz-box-shadow: 2px 3px 10px #999, 0px 0px 6px #999;
                box-shadow: 2px 3px 10px #999, 0px 0px 6px #999;
            }
            .blurb h1 {
                font-size: 1em;
                text-align: center;
            }
            .blurb h2 {
                margin-bottom: -.5em;
                margin-top: 1em;
            }
            .blurb h2 a {
                border-bottom: 1px solid #999;
                font-size: .7em;
                font-weight: bold;
                padding-bottom: .2em;
                text-align: justify;
            }
            .blurb a {
                display: block;
                text-align: center;
                font-weight: bold;
                font-size: 1.1em;
                text-decoration: none;
            }
            .blurb img {
                display: inline-block;
                padding-left: 10%;
                width: 80%;
            }
            `}</style>
        </div>
    )
}