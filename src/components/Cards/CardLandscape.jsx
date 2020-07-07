import { ReactComponent as StarIcon } from '@icons/star.svg';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

const defaultImage = require('./images/default-image.svg');

const useStyles = makeStyles((theme) => ({
  /*   containerCard: {
      background: theme.palette.optional.main,
      backgroundImage: `url(${defaultImage})`,
      backgroundSize: 80,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }, */
  landscape: ({ width, height, bgSize, borderRadius, image }) => ({
    backgroundImage: `url(${image})`,
    position: 'relative',
    margin: height * 0.06,
    backgroundSize: bgSize || '100%',
    border: `1px solid ${theme?.palette?.primary?.main}`,
    borderRadius: borderRadius || 6,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    height: height || 136,
    width: width || '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // transition: "0.5s",

    '&::before': {
      content: `''`,
      position: 'absolute',
      zIndex: -1,
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      background: theme?.palette?.primary?.main,
      backgroundImage: `url(${defaultImage})`,
      backgroundSize: 80,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    // "&:hover": {
    //   width: width + width * 0.06,
    //   height: height + height * 0.13,
    //   margin: 0
    //   // transition: "0.5s"
    // },
    // "&:focus": {
    //   width: width + width * 0.06,
    //   height: height + height * 0.13,
    //   margin: 0
    //   // transition: "0.5s"
    // }
  }),
  category: {
    height: '80px!important',
    width: '170px!important'
  },
  paper: {
    background: 'transparent'
  },
  chip: {
    borderRadius: '70px',
    fontSize: 16,
    textTransform: 'lowercase',
    background: theme?.palette?.primary?.main,
    height: 'auto',
    padding: 8,
    margin: 5,
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.5)'
  },
  typography: ({ width }) => ({
    color: 'white',
    marginTop: 10,
    width: width || 290
  })
}));

const CardLandscape = ({
  novo = false,
  height = 130,
  width = '100%',
  bgSize,
  borderRadius,
  title = false,
  image,
  children,
  focusHandler,
  data,
  clickHandler,
  history,
  match,
  sendToPlay,
  scrollToTop = true,
  isFocusable
}) => {
  const classes = useStyles({ width, height, bgSize, borderRadius, image });
  const [foco, setFoco] = useState(false);

  return (
    <div className={classes.containerCard}>
      <div
        className={`${classes.landscape} ${isFocusable ? 'focusable' : ''} ${
          foco ? 'active' : ''
        } ${data.href ? classes.category : ''}`}
        tabIndex="0"
        onClick={(e) => {}}
        onFocus={(e) => {}}
        onKeyUp={(e) => {}}
      >
        <Paper elevation={0} className={classes.paper}>
          {novo && (
            <Chip
              className={classes.chip}
              icon={<StarIcon style={{ color: '#fff', margin: '0' }} />}
            />
          )}
        </Paper>
        {children}
      </div>
      {title && (
        <Typography className={classes.typography} variant="body1" noWrap>
          {title}
        </Typography>
      )}
    </div>
  );
};
export default CardLandscape;
