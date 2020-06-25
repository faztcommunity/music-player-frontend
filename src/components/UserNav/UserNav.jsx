import React, { useState } from 'react';
import useUser from '@hooks/useUser';
import Search from '@components/Search/Search';
import Grid from '@material-ui/core/Grid';
import { Menu, MenuItem } from '@material-ui/core';
import CardTalent from '@components/Cards/CardTalent';

export default function UserNav() {
  const { user } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);

  const avatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (term) => {
    console.log('Searching!');
  };

  return (
    <Grid container direction="row" justify="space-between" alignItems="flex-start">
      <Search search={handleSearch} />
      Welcome Back, {user.email}
      <CardTalent
        clickHandler={avatarClick}
        image="https://avatars3.githubusercontent.com/u/15000248?s=460&u=2e1dc6e71e73a162aef210b9807890c30bc48c1f&v=4"
      />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
        <MenuItem onClick={user.logOut}>Salir</MenuItem>
      </Menu>
    </Grid>
  );
}
