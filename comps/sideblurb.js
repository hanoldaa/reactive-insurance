export default function SideBlurb (props) {
    return (
        <div className="blurb">
            {props.children}
            <style jsx>{`
            .blurb {
                border-radius: 5px;
                background-color: #05a5d1;
                box-shadow: 2px 3px 10px #036a86;
                color: white;
                font-family: 'Open Sans';
                font-size: .8em;
                margin: .5em 1em;
                padding: 1em;
            }
            `}</style>
        </div>
    )
}