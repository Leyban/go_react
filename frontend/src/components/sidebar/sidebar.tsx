import "./sidebar.css"
import Kanban from "./../../assets/kanban.tsx"

function SideBar() {

     return (
          <div id="sidebar">
              <div className="title">
                  <div style={{backgroundColor: '#655FCB'}}></div> 
                  <div style={{backgroundColor: '#545399'}}></div> 
                  <div style={{backgroundColor: '#47437E'}}></div> 
                  <h1>kanban</h1>
              </div>
              <p className="all_boards">ALL  BOARDS (3)</p>
              <ul>
                  <li><Kanban/>Marketing Plan</li>
                  <li><Kanban/>Platform Launch</li>
                  <li><Kanban color="#E2E2E2"/>Roadmap</li>
                  <div className="highlight"></div>
              </ul>
              <p className="create_new"><Kanban color="#645FC6"/>Create New Board</p>
          </div>
    )
}

export default SideBar

