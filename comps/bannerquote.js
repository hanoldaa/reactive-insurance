export default function BannerQuote (props) {
    return (
        <div className="banner-quote">
            <p>{props.quote}</p>
            <style jsx>{`
                .banner-quote {
                    background: 
                        linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
                        url(${props.src});
                    background-size: cover;
                    background-position: center center;
                }
                .banner-quote p {
                    color: white;
                    font-family: 'Open Sans';
                    font-size: 2em;
                    font-weight: bold;
                    margin-top: 0;
                    padding: 10% 10%;
                }
                @media all and (min-width: 680px) {
                    .banner-quote {
                        background-attachment: fixed;
                    }
                }
            `}</style>
        </div>
    )
}