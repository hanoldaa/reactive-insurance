export default function SideBar (props) {
    return (
        <div className={"sidebar " + props.className}>
            <p className="sidebar-header">{props.header}</p>
            {props.children}
            <style jsx>{`
            .sidebar {
                flex: 1 100%;
            }
            .sidebar-header {
                color: #05A5D1;
                font-family: Ubuntu;
                font-size: .9em;
                font-weight: bold;
                letter-spacing: .3em;
                text-align: center;
            }

            @media all and (min-width: 680px) {
                .sidebar { 
                    flex: 1 0px; 
                    order: 1; 
                    max-width: 300px
                }
            }
            `}</style>
        </div>
    )
}