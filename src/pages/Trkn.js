import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import YouTube from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import TrknIcon from '@mui/icons-material/BugReportOutlined';
import Settings from '@mui/icons-material/History';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FileCopyOutlined from '@mui/icons-material/FileCopyOutlined';
import localForage from 'localforage';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

// Import statements...

export default function Trkn() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(2);
  const [urls, setUrls] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleNavigation = (newValue) => {
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/history");
    } else if (newValue === 2) {
      navigate("/trkn");
    }
  };

  React.useEffect(() => {
    document.title = 'DarkTube - History';
    const fetchUrls = async () => {
      const urlsFromDb = await localForage.getItem('urls');
      setUrls(urlsFromDb || []);
    };

    fetchUrls();
  }, []);

  return (
    <>
      <div>
        <h2 className="rainbow-text">Bienvenue dans l'univers de Trhacknon</h2>
        <div style={{ textAlign: 'center' }}>
          <img id="logo" src="https://dark-client-trkn.replit.app/trkn.jpg" alt="trkn" />
        </div>
        <p>
          Trhacknon est un hacktiviste engagé dans diverses causes et actions en ligne.
          Il partage les idéaux d'Anonymous et s'engage activement pour la liberté d'expression,
          la protection de la vie privée et la lutte contre la censure en ligne.
        </p>
        <p>
          Anonymous, un mouvement mondial de hacktivistes, lutte pour la justice sociale et
          s'oppose à la corruption. Hacktivists, tels que Trhacknon, utilisent leurs compétences
          en hacking de manière éthique pour défendre des idéaux politiques et sociaux.
        </p>
        <p>
          Dans le monde numérique, ces hacktivistes œuvrent pour un Internet libre, ouvert et sûr,
          tout en protégeant les droits fondamentaux des individus.
        </p>
        <p>
          Rejoignez Trhacknon et Anonymous dans leur quête pour un monde numérique plus équitable
          et transparent.
        </p>
      </div>
      <Box sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0
      }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            handleNavigation(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="History" icon={<Settings />} />
          <BottomNavigationAction label="Trkn" icon={<TrknIcon />} component={Link} to="/trkn" />
        </BottomNavigation>
      </Box>
    </>
  );
}