import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [openTarif, setOpenTarif] = useState(false);
  const [openAnnonceur, setOpenAnnonceur] = useState(false);
  const [openPiges, setOpenPiges] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true); // Set to true for the sidebar to be open by default

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const randomName = "Prénom Nom"; // Remplacer par la logique de votre choix
  const randomPhotoUrl = "https://source.unsplash.com/random/100x100"; // Remplacer par la logique de votre choix

  return (
    <div style={{ position: 'fixed', zIndex: 1 }}>
      <Drawer variant="permanent" open={drawerOpen}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <img src={randomPhotoUrl} alt="User" style={{ width: '100px', borderRadius: '50%' }} />
          <h2>{randomName}</h2>
        </div>
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Management" />
          </ListItem>
          <ListItem button onClick={() => setOpenTarif(!openTarif)}>
            <ListItemText primary="💹 Tableau de grilles tarifaire" />
            {openTarif ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openTarif} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: 30 }}>
                <ListItemText primary="Création" />
              </ListItem>
              <ListItem button style={{ paddingLeft: 30 }}>
                <ListItemText primary="Consultation & Modification" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => setOpenAnnonceur(!openAnnonceur)}>
            <ListItemText primary="™️ Tableau des annonceurs" />
            {openAnnonceur ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openAnnonceur} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: 30 }}>
                <ListItemText primary="Création" />
              </ListItem>
              <ListItem button style={{ paddingLeft: 30 }}>
                <ListItemText primary="Consultation & Modification" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => setOpenPiges(!openPiges)}>
            <ListItemText primary="📃 Tableau de piges" />
            {openPiges ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openPiges} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: 30 }}>
                <ListItemText primary="Création" />
              </ListItem>
              <ListItem button style={{ paddingLeft: 30 }}>
                <ListItemText primary="Consultation & Modification" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
