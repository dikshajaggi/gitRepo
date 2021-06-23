import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FolderIcon from '@material-ui/icons/Folder';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

function SideBar() {
  return (
    <div className="wrapper1">

        <div className="icons">
            <span className="active"></span>
            <HomeIcon  style={{ color: "#2E9CFD", fontSize:"22px",marginBottom:"15px", cursor:"pointer"}}></HomeIcon> 
            <AssessmentIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px",cursor:"pointer"}}></AssessmentIcon> 
            <BusinessCenterIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px",cursor:"pointer"}}></BusinessCenterIcon> 
            <FolderIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px",cursor:"pointer"}}></FolderIcon> 
            <EventAvailableIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px",cursor:"pointer"}}></EventAvailableIcon> 
            <PeopleAltIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px",cursor:"pointer"}}></PeopleAltIcon> 
            <CommentIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px",cursor:"pointer"}}></CommentIcon> 
            <ExitToAppIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px",cursor:"pointer"}}></ExitToAppIcon>
        </div>

        <div className="lasticon"> 
        <SettingsIcon style={{ color: "white" , fontSize:"22px", marginBottom:"15px",cursor:"pointer"}}></SettingsIcon>
        </div>
    </div>
  );
}

export default SideBar;