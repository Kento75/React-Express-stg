import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import { LinearProgress } from 'material-ui/Progress';

const componentStyles = {
  dialog: {
    width: '40%',
    maxWidth: 'none'
  }
};

const LoadingDialog = ({
  isLoadingOpen
}) => (
  <Dialog
    actions={[]}
    modal={true}
    open={ isLoadingOpen }
    contentStyle={componentStyles.dialog}
  >
    <div style={{textAlign: "center"}}>
      <LinearProgress/>
    </div>
  </Dialog>
);

LoadingDialog.propTypes = {
  isLoadingOpen: PropTypes.bool.isRequired
};

export default LoadingDialog;