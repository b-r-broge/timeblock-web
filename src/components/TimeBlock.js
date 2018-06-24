import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Modal from 'react-modal';
import Activities from './Activities';
import Schedule from './Schedule';

class TimeBlock extends Component {
  constructor(props) {
    super(props);

    //bind functions
    this.addActivity = this.addActivity.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      // add state
      isModalOpen: false,
      activities: [],
      scheduled: {},
      date: Date.now()
    }
  }

  // add fetch to json storage document

  addActivity = (e) => {
    e.preventDefault();
    console.log(e);
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    this.setState({isModalOpen: false});
  }

  render() {
    return (
      <div>
        <div className="activityList">
          <Button className="mdc-button--raised addActivity" onClick={this.openModal}>Add</Button>
          {this.state.activities.length === 0 ? null :
              this.state.activities.map(activity => (
                <Activities
                   key={activity.index}
                   activityName={activity.name}
                   activityDefaultTime={activity.defaultTime}
                />
              ))
          }
        </div>
        <div className="schedule">
          <Schedule
            date={this.state.date}
            scheduled={this.state.scheduled}
          />
        </div>
      </div>
    );
  }
}

export default TimeBlock;
