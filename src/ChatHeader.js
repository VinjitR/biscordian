import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocation';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAlt';
import SearchRoundedIcon from '@material-ui/icons/Search';
import SendRoundedIcon from '@material-ui/icons/Send';
import HelpRoundedIcon from '@material-ui/icons/Help';

function ChatHeader({channelName}) {

    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3><span className="chatHeader__hash">
                    #</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon/>
                <EditLocationRoundedIcon/>
                <PeopleAltRoundedIcon/>
                <div className="chatHeader__search">
                    <input placeholder="Search"/>
                    <SearchRoundedIcon/>

                </div>
                    <SendRoundedIcon/>
                    <HelpRoundedIcon/>
            </div>
        </div>
    )
}

export default ChatHeader
