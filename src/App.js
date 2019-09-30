import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import img1 from './imagenes/2.jpg'
import img2 from './imagenes/1.jpg'
import img3 from './imagenes/3.jpg'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

console.log(img1);
console.log(img2);
console.log(img3);

function BlogItem(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>{props.descripcion}</p>
      
'
      <List style={{ width: '100%', maxWidth: 360, margin: '0 auto' }}>
        {props.items && props.items.map(i => {
        return  (
            <ListItem alignItems='center'>
            {i}
            </ListItem>
          )
        })}
      </List>

    </div>
  )
}
const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Castillo 1', 1, 2, 3, 4),
  createData('Castillo 2', 4, 3, 2, 1),
  createData('Castillo 3', 5, 3, 1, 2),
  
];

export function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Castillos</TableCell>
            <TableCell align="right">Favorite</TableCell>
            <TableCell align="right">Older</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Population</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

const dudUrl = 'javascript:;';

export function Links() {
  const classes = useStyles();

  return (
    <Typography>
      <Link href={dudUrl} className={classes.link}>
        Link disabled

      </Link>
    </Typography>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
        <center>
          <bor>"Blog about Castles"</bor>
        </center>
      </h1>
      <Button>Home</Button> <Button>About</Button> <Button>Favorites</Button>
      </header>
    <BlogItem  nombre="Castillo 1" descripcion="Descripcion castillo 1"  items={['item 1', 'item 2']}/>
    <img src={img1} alt="img1" />;
    <BlogItem nombre="Castillo 2" descripcion="Descripcion castillo 2" items={['']}/>
    <img src={img2} alt="img2"/>;
    <BlogItem nombre="Castillo 3" descripcion="Descripcion castillo 3" items={['']}/>
    <img src={img3} alt="img3"/>
    <BlogItem/>  
    <SimpleTable>
    </SimpleTable>
    <Links>
      </Links> 
    </div>   
  );
}


export default App;
