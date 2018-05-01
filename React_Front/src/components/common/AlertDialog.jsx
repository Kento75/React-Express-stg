import React, { Component, PropTypes } from 'react';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';

const ResultDialog = ({
  onCloseDialog,
  message
}) => (
  <Dialog
    actions={[
      <Button color="primary" onTouchTap={onCloseDialog}>
        OK
      </Button>
      ,
    ]}
    modal={false}
    open={ typeof message === "string" && message.length > 0 }
    onRequestClose={onCloseDialog}
  >
    {message}
  </Dialog>
);

ResultDialog.propTypes = {
  onCloseDialog: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default ResultDialog;