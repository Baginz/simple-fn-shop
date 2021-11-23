const Footer = () => {
    return (
        <footer className="page-footer light-blue accent-1" style={{paddingTop: "0"}}>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                </div>
            </div>
        </footer>
    )
}

export default Footer
