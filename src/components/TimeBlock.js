import React, {Component} from 'react';
import {Button, TextField, Grid} from '@material-ui/core';
import ReactModal from 'react-modal';
import Activities from './Activities';
import Schedule from './Schedule';

ReactModal.setAppElement('#root')

class TimeBlock extends Component {
  constructor(props) {
    super(props);

    //bind functions
    this.addActivity = this.addActivity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      isModalOpen: false,
      activities: [<Activities key={0} name={'coding'} defaultTime={1}/>
        ],
      scheduled: {},
      date: Date.now(),
      activityName: "",
      activityTime: 1
    }
  }

  // add fetch to json storage document

  addActivity = (e) => {
    e.preventDefault();

    if (this.state.activityName.trim() === "") {
      return
    }

    let active = this.state.activities;
    active.push(<Activities key={this.state.activities.length + 1} name={this.state.activityName} defaultTime={this.state.activityTime}/>)
    this.setState({activityName: "", activityTime: 0, activities: active, isModalOpen: false});
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    this.setState({activityName: "", activityTime: 0, isModalOpen: false});
  }

  render() {
    return (<Grid container={true} spacing={16}>
      <ReactModal isOpen={this.state.isModalOpen} contentLabel="Add new activity">
        <form noValidate="noValidate" autoComplete="off">
          <TextField id="activityName" label="Name" value={this.state.activityName} onChange={this.handleChange} margin="normal"/>
          <TextField id="activityTime" label="Number of Hours" value={this.state.activityTime} onChange={this.handleChange} type="number" InputLabelProps={{
              shrink: true
            }}/>
          <Button onClick={this.closeModal}>Close Modal</Button>
          <Button variant="outlined" color="primary" onClick={this.addActivity}>Submit</Button>
        </form>
      </ReactModal>
      <Grid item={true} xs={6} className="activityList">
        <Button variant="contained" color="primary" onClick={this.openModal}>
          Add
        </Button>
        {this.state.activities.map(activity => activity)}
      </Grid>
      <Grid item={true} xs={6} className="schedule">
        <Schedule date={this.state.date} scheduled={this.state.scheduled}/>
      </Grid>
    </Grid>);
  }
}

export default TimeBlock;
