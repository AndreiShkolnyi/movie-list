import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react';

import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

export const MovieCard = ({ id, title, imageUrl, description, selectCard }) => {
  return (
   <Link to={`/movie/${id}`}>
    <Card className={styles.root} onClick={() => selectCard(id)}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={imageUrl} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {title.substr(0, 23)}{title.length > 26? '...' : ''}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substr(0, 50)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   </Link>
  );
};
