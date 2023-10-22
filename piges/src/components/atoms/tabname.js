import React, { useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'; // Importez MenuItem ici
import { Box } from '@mui/system';

const NomTableauTar = () => {
  const [codeTar, setCodeTar] = React.useState('');
  const [num, setNum] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);
  const btnRef = useRef(null);

  const handleChangeCodeTar = (event) => setCodeTar(event.target.value);
  const handleChangeNum = (event) => {
    const value = event.target.value;
    // Vérifiez si la valeur est vide ou si elle ne commence pas par zéro
    if (value === '' || /^[1-9][0-9]*$/.test(value)) {
      setNum(value);
    }
  };
  

  useEffect(() => {
    if (!isValid) {
      btnRef.current.style.animation = 'blink 0.5s infinite';
    } else {
      btnRef.current.style.animation = '';
    }
  }, [isValid]);

  const handleValidation = () => {
    if (!codeTar || !num || !/^[1-9][0-9]*$/.test(num)) {
      setIsValid(false);
    } else {
      setIsValid(true);
      // Ajoutez ici le code pour exécuter la soumission du formulaire si tout est valide
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap={0.5}
      width="50%"
      mx="auto"
      style={{ marginRight: '18%', marginTop:'5%' }} // Ajoutez cette ligne pour décaler le formulaire de 10% vers la droite

    >
      <TextField
        label="CODE"
        value="TAR"
        variant="outlined"
        size="small"
        style={{ flexGrow: 0.7, marginRight: 8 }}
        disabled
      />

      <FormControl variant="outlined" size="small" style={{ flexGrow: 1.4, marginRight: 8 }}>
        <InputLabel id="code-tar-label">PAYS</InputLabel>
        <Select
          labelId="code-tar-label"
          id="code-tar-select"
          value={codeTar}
          label="PAYS"
          onChange={handleChangeCodeTar}
        >
          <MenuItem value={"CI"}>Côte d'Ivoire</MenuItem>
          <MenuItem value={"FR"}>France</MenuItem>
          <MenuItem value={"CM"}>Cameroun</MenuItem>
          <MenuItem value={"CG"}>Congo</MenuItem>
          <MenuItem value={"GA"}>Gabon</MenuItem>
          <MenuItem value={"ML"}>Mali</MenuItem>
          <MenuItem value={"SN"}>Sénégal</MenuItem>
          <MenuItem value={"CD"}>République démocratique du Congo</MenuItem>
          <MenuItem value={"TD"}>Tchad</MenuItem>
          <MenuItem value={"BF"}>Burkina Faso</MenuItem>
          <MenuItem value={"TG"}>Togo</MenuItem>
          <MenuItem value={"NE"}>Niger</MenuItem>
          <MenuItem value={"BN"}>Bénin</MenuItem>
          <MenuItem value={"RW"}>Rwanda</MenuItem>
          <MenuItem value={"GN"}>Guinée</MenuItem>
          <MenuItem value={"MA"}>Maroc</MenuItem>
          <MenuItem value={"PA"}>Pan-Afrique</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="NUM"
        value={num}
        onChange={handleChangeNum}
        variant="outlined"
        size="small"
        style={{ flexGrow: 0.7, marginRight: 8 }}
      />

      <Button
        variant="contained"
        color={isValid ? "primary" : "error"}
        size="small"
        style={{ flexGrow: 0.2 }}
        onClick={handleValidation}
        ref={btnRef}
        disabled={!codeTar || !num}
      >
        Valider
      </Button>
    </Box>
  );
};

export default NomTableauTar;
