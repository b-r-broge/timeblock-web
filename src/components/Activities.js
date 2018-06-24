import React, { Component } from 'react';
import { Card, Paper, Typography } from '@material-ui/core';

export default class Activities extends Component {
  render() {
    return (
      <Card>
        <Paper elevation={2} key={this.props.index}>
          <Typography variant="headline" component="h3">
            {this.props.name}
          </Typography>
          <Typography component="p">
            {this.props.defaultTime}
          </Typography>
        </Paper>
      </Card>
    );
  }
}
