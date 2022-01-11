import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db,{ auth} from './firebase';




function Sidebar() {
    const user=useSelector(selectUser);
    
    const [channels,setChannels]=useState([]);

    useEffect(()=>{
        db.collection("channels").onSnapshot(snapshot=>
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                channel:doc.data(),
            })))
        );
    },[]);

    const handleAddChannel=()=>{
        const channelName=prompt("Enter a new channel name");

        if (channelName){
            db.collection('channels').add({
                channelName:channelName,
            })
        }

    }

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
                    <AddIcon onClick={handleAddChannel}
                    className="sidebar__addChannel"/>
                </div>
            <div className="sidebar__channelList">
                {channels.map(({id,channel})=>
                    // console.log(channel);
                    <SidebarChannel key={id} id={id} channel={channel}/>)
                    
                }
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
                <Avatar src={user.photo} onClick={()=>auth.signOut()}/>
                <div className="sidebar__ProfileInfo">
                    <h3>{user.displayName}</h3>
                    <p>{user.uid}</p>
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
