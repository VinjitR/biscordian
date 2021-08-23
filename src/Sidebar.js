import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutLinedIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Biscordian</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text Channel</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>
            <div className="sidebar__channelList">
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
            </div>
            </div> 

            <div className="sidebar__voice">
                    <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
                    <div className="sidebar__voiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>
                    <div className="sidebar__voiceIcons">
                        <InfoOutLinedIcon/>
                        <CallIcon/>
                    </div>
            </div>
            <div className="sidebar__Profile">
                <Avatar/>
                <div className="sidebar__ProfileInfo">
                    <h3>@iBlaz</h3>
                    <p>#thismyid</p>
                </div>
                <div className="sidebar__ProfileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
   
        </div>
    );
}

export default Sidebar;
