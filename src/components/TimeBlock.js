import React, { Component } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
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
      activities: [<Activities index={0} name={'coding'} defaultTime={1} />],
      scheduled: {},
      date: Date.now()
    }
  }

  // add fetch to json storage document

  addActivity = (e) => {
    e.preventDefault();
    let active = this.state.activities;
    // active.push({index:this.state.activities.length+1, name:'coding', defaultTime:3});
    active.push(<Activities index={this.state.activities.length+1} name={'coding'} defaultTime={1} />)
    console.log('active', active);
    this.setState({
      activities: active
    })
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    this.setState({isModalOpen: false});
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={6} className="activityList">
          <Button variant="contained" color="primary"
            onClick={this.addActivity}>
              Add
          </Button>
          {this.state.activities.map( activity => activity)}
        {/*  {this.state.activities.map(activity => (
                <Activities
                   key={activity.index}
                   activityName={activity.name}
                   activityDefaultTime={activity.defaultTime}
                />
            ))} */}
        </Grid>
        <Grid item xs={6} className="schedule">
          <Schedule
            date={this.state.date}
            scheduled={this.state.scheduled}
          />
      </Grid>
    </Grid>
    );
  }
}

export default TimeBlock;
