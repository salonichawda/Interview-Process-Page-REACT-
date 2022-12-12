import Footer from "./Footer"
import Header from "./Header"
import { RiDeleteBin5Line } from "react-icons/ri"
import "./style.css"
export default function Body() {
    return (
        <div id="body">
            <Header />
            <div id="bodyItems">
                <div id="name">
                    <label>Name<span>*</span></label>
                    <h2>Business Devolepment Excutive</h2>
                    <hr id="line"></hr>
                </div>
                <h2 id="h2"><i class="fa-solid fa-puzzle-piece"></i>Interview Process Rounds</h2>
                <div id="grid">
                    <div id="Div1">
                        <div id="icon">
                            <div id="btn"><button>1</button></div>
                            <div id="I"><RiDeleteBin5Line /></div>
                        </div>
                        <div id="level">
                            <label>Level<span>*</span></label>
                            <h3>1</h3>
                            <hr id="hr"></hr>
                        </div>
                    </div>
                    <div id="Div">
                        <label>Name<span>*</span></label>
                        <h3>Telephonic Round</h3>
                        <hr></hr>
                    </div>
                    <div id="Div">
                        <label>Select Interviewer<span>*</span></label>
                        <select id="interviewer"><option>GIRISHPRASAD KS</option></select>
                        {/* <hr></hr> */}
                    </div>
                    <div id="Div1">
                        <div id="icon">
                            <div id="btn"><button>2</button></div>
                            <div id="I"><RiDeleteBin5Line /></div>
                        </div>
                        <div id="level">
                            <label>Level<span>*</span></label>
                            <h3>2</h3>
                            <hr id="hr"></hr>
                        </div>
                    </div>
                    <div id="Div">
                        <label>Name<span>*</span></label>
                        <h3>Telephonic Round</h3>
                        <hr></hr>
                    </div>
                    <div id="Div">
                        <label>Select Interviewer<span>*</span></label>
                        <select id="interviewer">
                            <option>RAKESH APPAJI</option>
                        </select>

                    </div>
                </div>
                <div id="Button">
                    <div><button id="new">ADD NEW+</button></div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}