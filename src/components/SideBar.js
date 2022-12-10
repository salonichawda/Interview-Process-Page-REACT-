import "./style.css"
export default function SideBar() {
    return (
        <div id="sidebar">
            <div id="select"><p>Dashboard</p></div>
            <div><select>
                <option>Employee</option>
            </select></div>
            <div><select>
                <option>Site/Field Track</option>
            </select></div>
            <div><select>
                <option>Payroll</option>
            </select></div>
            <div><select>
                <option>Statuatory Compliances</option>
            </select></div>
            <div><select>
                <option>Leaves</option>
            </select></div>
            <div><select>
                <option>Asset Management</option>
            </select></div>
           <div><select>
                <option>Goals & Performance</option>
            </select></div>
           <div><select>
                <option>Recruitment</option>
                <option>Openings</option>
                <option>Candidates</option>
                <option>Interview Process</option>
            </select></div>
        </div>
    )
}