import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root:{
    textAlign: 'center',
    marginTop: '2em',
    transform: 'scale(0.7)'
  }
}));

export default function ChordSelect() {
  const classes = useStyles();
  const [chord, setChord] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChordChange = event => {
    setChord(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Chord
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={chord}
          onChange={handleChordChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'A7'}>A7</MenuItem>
          <MenuItem value={'Am'}>Am</MenuItem>
          <MenuItem value={'B'}>B</MenuItem>
          <MenuItem value={'B7'}>B7</MenuItem>
          <MenuItem value={'Bm'}>Bm</MenuItem>
          <MenuItem value={'C'}>C</MenuItem>
          <MenuItem value={'C7'}>C7</MenuItem>
          <MenuItem value={'Cm'}>Cm</MenuItem>
          <MenuItem value={'D'}>D</MenuItem>
          <MenuItem value={'D7'}>D7</MenuItem>
          <MenuItem value={'Dm'}>Dm</MenuItem>
          <MenuItem value={'E'}>E</MenuItem>
          <MenuItem value={'E7'}>E7</MenuItem>
          <MenuItem value={'Em'}>Em</MenuItem>
          <MenuItem value={'F'}>F</MenuItem>
          <MenuItem value={'F7'}>F7</MenuItem>
          <MenuItem value={'Fm'}>Fm</MenuItem>
          <MenuItem value={'G'}>G</MenuItem>
          <MenuItem value={'G7'}>G7</MenuItem>
          <MenuItem value={'Gm'}>Gm</MenuItem>
        </Select>
      </FormControl>
   </div>
  );
}

