import './Info.css';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

function Info() {
  return (
    <>
        <div className="name">
        <span style={{ marginLeft:"20px", marginRight:"20px",marginTop:"10px"}}><PersonIcon style={{ fontSize:"18px"}}></PersonIcon></span>
        <div className="info">
            <span style={{ fontSize:"14px"}}>Rosie Metts</span>
            <span style={{ fontSize:"10px"}}>Applied for <span style={{color:"#2E9CFD"}}>iOS Developer</span> </span>
        </div>
        </div>
        <div className="contact">
            <span style={{ marginRight:"20px",marginTop:"10px"}}><EmailIcon style={{ fontSize:"18px"}}></EmailIcon></span>
            <span style={{ marginRight:"20px",marginTop:"10px"}}><CallIcon style={{ fontSize:"18px"}}></CallIcon></span>
        </div>
    </>
  );
}

export default Info;
