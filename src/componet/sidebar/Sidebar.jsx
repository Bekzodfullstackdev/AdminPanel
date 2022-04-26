import "./Sidebar.css"
import { MdLineStyle } from "react-icons/md"
import { MdTimeline } from "react-icons/md"
import { FiTrendingUp } from "react-icons/fi"
import { MdPermIdentity } from "react-icons/md"
import { MdStorefront } from "react-icons/md"
import { MdAttachMoney } from "react-icons/md"
import { MdMailOutline } from "react-icons/md"
import { MdDynamicFeed } from "react-icons/md"
import { MdChatBubbleOutline } from "react-icons/md"
import { MdWorkOutline } from "react-icons/md"
import { MdReport } from "react-icons/md"

export default function sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MdLineStyle  className="sideabarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <MdTimeline className="sideabarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <FiTrendingUp className="sideabarIcon" />
                            Home
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MdPermIdentity  className="sideabarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <MdStorefront className="sideabarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <MdAttachMoney className="sideabarIcon" />
                            Home
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MdMailOutline  className="sideabarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <MdDynamicFeed className="sideabarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <MdChatBubbleOutline className="sideabarIcon" />
                            Home
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MdWorkOutline  className="sideabarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <MdTimeline className="sideabarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <MdReport className="sideabarIcon" />
                            Home
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
