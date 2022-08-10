import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Navbar from "./Navbar";
import '../style/Layout.css'
import AudioPlayer from "./AudioPlayer";

const Layout =({children})=>{
    return(
        <div className="layout">
            <Header className="header"/>
            <div className="content">
            <Navbar className="navbar"/>
           {children}
            </div>

            <AudioPlayer className="audio-player"/>
        </div>
    )
}
export default Layout;