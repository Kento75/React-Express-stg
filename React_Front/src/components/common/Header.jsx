import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import createPalette from 'material-ui/styles/createPalette';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import LinkIcon from 'material-ui-icons/Link';


const dark = true

const palette = createPalette({
  primary: blue,
  accent: pink,
  type: dark ? 'dark' : 'light',
});

const theme = createMuiTheme({ palette })

const AppBarIconMenu = (props) => (
  <AppBar
    title='React Front'
/*    iconElementLeft={
      <Menu
      iconButtonElement={
        <IconButton><LinkIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      {...props}
    >
      <MenuItem
        primaryText='top'
        containerElement={<Link to='/' />}
      />
      <MenuItem
        primaryText='search'
        containerElement={<Link to='/search' />}
      />
      <MenuItem
        primaryText='create'
        containerElement={<Link to='/create' />}
      />
      <MenuItem
        primaryText='HelloWorld'
        containerElement={<Link to='/helloworld' />}
      />
    </Menu>
    }
*/  />
);

class Header extends React.Component {

  render() {
    return (
      <MuiThemeProvider theme={theme} styleManager={styleManager}>
        <div>
          <header>
            <AppBarIconMenu />
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Header;