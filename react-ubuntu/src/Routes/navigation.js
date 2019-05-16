import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';

function MenuPopupState() {
  // spread operator ...
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
               <Link to="/home">Home</Link>
                 </MenuItem>
            <MenuItem onClick={popupState.close}>
               <Link to="/order">Order</Link>
                 </MenuItem>
            <MenuItem onClick={popupState.close}>
               <Link to="/kitchen">Kitchen</Link>
                 </MenuItem>
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
}

export default MenuPopupState;