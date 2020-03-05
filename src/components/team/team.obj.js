import React, {Fragment} from 'react';
import {TeamText} from '../subcomponents/team/teamtext.obj';
import {TeamImage} from '../subcomponents/team/teamimage.obj';
import './team.style.desktop.scss';
import './team.style.mobile.scss';
import teamData from '../../data/data.team.json';

export default class Team extends React.Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div className="team">
                <div className="teamtext">
                    <TeamText />
                </div>
                <div className ="teamimage">
                    <TeamImage />
                </div>
            </div>
        )

    }
}

const TeamMemberListObject = props => {
  const { members } = props;
  const { PrestonSmith } = members;

  return (
    <TeamMember 
      name={ PrestonSmith.name } 
      position={ PrestonSmith.position } 
      location={ PrestonSmith.location } 
    />
  )
}

const TeamMemberList = props => (
  <div className="team__member__list">
    <TeamMember 
      name="Adam Strudwick" 
      position="Principal" 
      location="London" 
    />
    <TeamMember 
      name="Ruyi Igiehon" 
      position="Director" 
      location="New York" 
    />
    <TeamMember 
      name={ teamData.members.PrestonSmith.name } 
      position={ teamData.members.PrestonSmith.position } 
      location={ teamData.members.PrestonSmith.location } 
    />
  </div>
)

const TeamMember = (props) => (
  <div className="team__member">
    <p className="name">{props.name}</p>
    <p className="position">{props.position}</p>
    <p className="location">{props.location}</p>
  </div>
)
