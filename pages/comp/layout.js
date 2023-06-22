import Navbar from "./navbar";
import Footer from "./footer";
const layout = ({children}) => {
    return (  
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}
 
export default layout;