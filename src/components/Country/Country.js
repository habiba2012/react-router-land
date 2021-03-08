import React,{ useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const Country = (props) => {
    const{name, capital, currencies, flag} = props.country;
    const history = useHistory();
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });
      const classes = useStyles(); 
      const countryStyle ={
       margin: '25px'
      }
      
      const handleClick = (countryName)=>{
        const url = `/country/${countryName}`
        history.push(url)
      }
    return (
      <div style={countryStyle}>
         
            <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={flag}
            title="country flag"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Link to={`/country/${name}`}>More info</Link> */}
          <Button onClick={()=>handleClick(name)} size="small" color="primary">
           Show Details
          </Button>
         
        </CardActions>
      </Card>
      </div>
    );
};

export default Country;