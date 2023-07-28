import Footer from "./footer";
import MainNavigation from "./mainNav";

const{ Fragment } = require("react");
// const { default: MainNavigation } = require("./mainNav");

function Layout(Props){
    return(
        <Fragment>
            <MainNavigation/>

            <main>
            {Props.children}
            </main>

            <Footer/>
        </Fragment>
    )
}
export default Layout