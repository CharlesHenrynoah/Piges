// Piges/piges/src/components/molecules/nav/nav.js
import React, { useState, useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
  const [openManagement, setOpenManagement] = useState(false);
  const [openTarif, setOpenTarif] = useState(false);
  const [openAnnonceur, setOpenAnnonceur] = useState(false);
  const [openPiges, setOpenPiges] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true); // Set to true for the sidebar to be open by default
  const { user } = useContext(UserContext); // Obtenez l'utilisateur connecté du contexte
  
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
          <ListItem button onClick={() => setOpenManagement(!openManagement)}>
            <ListItemText primary="🕹️ Management" />
            {openManagement ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openManagement} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: 30 }}>
              <Link to={`/info/${user ? user.prenom : ''}`}><ListItemText primary="🤖 Informations personnelles" /></Link>
              </ListItem>
              <ListItem button style={{ paddingLeft: 30 }}>
              <Link to={`/act/${user ? user.prenom : ''}`}><ListItemText primary="📈 Informations activité" /></Link>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => setOpenTarif(!openTarif)}>
            <ListItemText primary="💹 Tableau de grilles tarifaire" />
            {openTarif ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openTarif} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: 30 }}>
              <Link to={`/creatar/${user ? user.prenom : ''}`}><ListItemText primary="Création 1" /></Link>
              </ListItem>
              <ListItem button style={{ paddingLeft: 30 }}>
              <Link to={`/consmodtar/${user ? user.prenom : ''}`}><ListItemText primary="Consultation & Modification 1" /></Link>
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
              <Link to={`/creatan/${user ? user.prenom : ''}`}><ListItemText primary="Création 2" /></Link>
              </ListItem>
              <ListItem button style={{ paddingLeft: 30 }}>
              <Link to={`/consmodtan/${user ? user.prenom : ''}`}><ListItemText primary="Consultation & Modification 2" /></Link>
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
              <Link to={`/creatpi/${user ? user.prenom : ''}`}><ListItemText primary="Création 3" /></Link>
              </ListItem>
              <ListItem button style={{ paddingLeft: 30 }}>
              <Link to={`/consmodpi/${user ? user.prenom : ''}`}><ListItemText primary="Consultation & Modification 3" /></Link>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;