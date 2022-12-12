import "./style.css"
import { AiOutlineHome } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { BsPersonCheck } from "react-icons/bs"
import { VscPerson } from "react-icons/vsc"
import { AiFillContacts } from "react-icons/ai"
import { TfiBag } from "react-icons/tfi"
import { FaRegCalendarTimes } from "react-icons/fa"
import { MdSettingsSuggest } from "react-icons/md"
import { BsGraphUp } from "react-icons/bs"
export default function SideBar() {
    return (
        <div id="sidebar">
            <div id="select"><p><AiOutlineHome id="icons" />Dashboard</p></div>
            <div id="select"><BsPerson id="icons" /><select>
                <option>Employee</option>
            </select></div>
            <div id="select"><BsPersonCheck id="icons" /><select>
                <option>Attendance</option>
            </select></div>
            <div id="select"><VscPerson id="icons" /><select>
                <option>Site/Field Track</option>
            </select></div>
            <div id="select"><AiFillContacts id="icons" /><select>
                <option>Payroll</option>
            </select></div>
            <div id="select"><TfiBag id="icons" /><select>
                <option>Statuatory Compliances</option>
            </select></div>
            <div id="select"><FaRegCalendarTimes id="icons" /><select>
                <option>Leaves</option>
            </select></div>
            <div id="select"><MdSettingsSuggest id="icons" /><select>
                <option>Asset Management</option>
            </select></div>
            <div id="select"><BsGraphUp id="icons" /><select>
                <option>Goals & Performance</option>
            </select></div>
            <div id="select"><BsPerson id="icons" /><select>
                <option>Recruitment</option>
                <option>Openings</option>
                <option>Candidates</option>
                <option>Interview Process</option>
            </select></div>
        </div>
    )
}