import React from 'react';
import './callback.style.desktop.scss';
import data from '../../data/data.callback.json';

export default class Callback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1, 
    }
    this.updateStatus = this.updateStatus.bind(this);

    // this.name = "Success!";
    // this.description = "You now have full access to HLW add-ins!";
    // this.contact = "Submit a ticket if you have any question!";
  }
  
  updateStatus(){
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("code");
    console.log(term);

    if (term == null || term == ""){
      // this.name = "Oops!";
      // this.description = 
      // "Looks like either your license has been expired or you have no permission to access this data.";
      // this.contact = "Please reach out to NEXT by submitting a ticket!";
      this.state.current = 0;
    }
  }
  
  render() {

    const info = data.callbackData;
    const current = info[this.state.current];
    
    this.updateStatus();

    return (
      <div className={`callback callback__${current.status}`}>
        <div className='callback__left'>
          <div className='callback__title'>{current.Title}</div>
          <div className='callback__subtitle'>{current.description}</div>
          <div className='callback__contact'>{current.contact}</div>
        </div>

        <div className='callback__right'>
          <div className={`callback__emoticon__${current.status}`}></div>
          <div className={`callback__ticketButtonText__${current.status}`}>Ticket</div>
          <a className={`callback__ticketButtonImg__${current.status}`} href='https://hlw.atlassian.net/servicedesk/customer/portal/2'></a>
        </div>
      </div>
      // <div className={`callback callback__${current.shortName}`}>

      //   <div className="callback__lefthalfgrid">
      //     <div className={`callback__icon callback__icon__${current.shortName}`}/>
      //   </div>

      //   <div className="login__righthalfgrid">
      //     <div className="login__title">
      //       <p>Welcome!</p>
      //     </div>
      //     <div className="login__description">
      //       <p>Enter <ExternalLinkHighlighted className="about__seehow" value={"hlw"} destination={"https://www.hlw.design/"} /> credentials to grant access to your data!</p>
      //     </div>
      //     <div className="login__login">
      //       <p>Log In</p>
      //     </div>
      //     <div className="login__ticket">
      //       <p>Ticket</p>
      //     </div>
      //   </div>
      // </div>
    )
  }
}
