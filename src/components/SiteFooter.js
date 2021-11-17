import React from "react"
class SiteFooter extends React.Component {
   
    render() {
        return (
          <footer className="site-footer">
            <p>&copy; copyright <script>document.write(new Date().getFullYear())</script> A Revolutionary Act <a href="/privacy">Privacy</a> | <a href="/contact/">Contact</a> | <a href="/about/">About</a></p>
          </footer>
        );
    }
}
export default SiteFooter