import React from 'react';
import { Fragment } from 'react';

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <div className="contact__form">
        <NameEntryForm />
        <EmailEntryForm />
        <MessageEntryForm />
      </div>
    )
  }
}

export function EntryForm(props) {
  return (
    <Fragment>
      <p className="entry__form__name">{props.name}</p>
      <div className="entry__form__value">{props.value}</div>
    </Fragment>
  )
}

export function NameEntryForm(props) {
  return (
    <Fragment>
      <p>Name</p>
      <div className="answerbox"></div>
      <EntryForm name={props.name} value={props.value} />
    </Fragment>
  )
}

export function EmailEntryForm(props) {
  return (
    <fragment>
      <p>Email</p>
      <div className="answerbox"></div>
      <EntryForm name={props.name} value={props.value} />
    </fragment>
  )
}

export function MessageEntryForm(props) {
  return (
    <fragment>
      <p>Message</p>
      <div className="answerboxfat"></div>
      <EntryForm name={props.name} value={props.value} />
    </fragment>
  )
}