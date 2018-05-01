import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
//import RaisedButton from 'material-ui/RaisedButton';  v0.20.0
import Button from 'material-ui/Button';


const Create = ({
  create_company_code,
  create_company_name,
  create_address,
  create_mail,
  onChangeCompanyCode,
  onChangeCompanyName,
  onChangeAddress,
  onChangeMail,
  onClickRegisterBtn
}) => (
  <div>
    <div>
      <TextField
        label="会社コード"
        placeholder="会社コード"
        value={ create_company_code }
        onChange={e => onChangeCompanyCode(e)}
        margin="normal"
      />
    </div>
    <br />
    <div>
      <TextField
        label="会社名"
        placeholder="会社名"
        value={ create_company_name }
        onChange={e => onChangeCompanyName(e)}
        margin="normal"
      />
    </div>
    <br />
    <div>
      <TextField
        label="住所"
        placeholder="住所"
        value={ create_address }
        onChange={e => onChangeAddress(e)}
        margin="normal"
      />
    </div>
    <br />
    <div>
      <TextField
        label="メールアドレス"
        placeholder="メールアドレス"
        value={ create_mail }
        onChange={e => onChangeMail(e)}
        margin="normal"
      />
    </div>
    <br />
    <Button color="secondary" onClick={onClickRegisterBtn}>
      登録実行
    </Button>
  </div>
)

Create.propTypes = {
  create_company_code:  PropTypes.string.isRequired,
  create_company_name:  PropTypes.string.isRequired,
  create_address:       PropTypes.string.isRequired,
  create_mail:          PropTypes.string.isRequired,
  onChangeCompanyCode:  PropTypes.func.isRequired,
  onChangeCompanyName:  PropTypes.func.isRequired,
  onChangeAddress:      PropTypes.func.isRequired,
  onChangeMail:         PropTypes.func.isRequired,
  onClickRegisterBtn:   PropTypes.func.isRequired
}

export default Create;