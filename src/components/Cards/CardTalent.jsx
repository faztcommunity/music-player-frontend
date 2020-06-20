import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const imageDefault = require('./images/placeholder-actor.png');

const useStyles = makeStyles((theme) => ({
  containerCardTalent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '8px'
    //padding: '20px'
  },
  cardTalent: ({ width, height, bgSize, borderRadius, image }) => ({
    backgroundImage: `url(${image ? image : imageDefault})`,
    position: 'relative',
    margin: height * 0.04,
    backgroundSize: bgSize || 'cover',
    backgroundPosition: 'center',
    // border: `1px solid ${theme?.palette?.primary?.main}`,
    borderRadius: borderRadius || '50%',
    height: height || 50,
    width: width || 50,

    '&:hover': {
      width: width + width * 0.06,
      height: height + height * 0.06,
      backgroundSize: bgSize + bgSize * 0.13,
      border: `3px solid ${theme?.palette?.primary?.main}`,
      margin: 0
    },
    '&:focus': {
      width: width + width * 0.13,
      height: height + height * 0.13,
      backgroundSize: bgSize + bgSize * 0.13,
      border: `3px solid ${theme?.palette?.primary?.main}`,
      margin: 0,
      outline: 'none'
    }
  }),
  infoCard: {
    textAlign: 'center'
  },
  typographyTitle: ({ width }) => ({
    color: 'black',
    //marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    width: width
  }),
  typographyRol: ({ width }) => ({
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    width: width
  })
}));

const CardTalent = ({
  width,
  height,
  bgSize,
  borderRadius,
  title,
  image,
  children,
  infoTalent,
  focusHandler,
  data,
  clickHandler,
  history,
  sendToPlay,
  isFocusable
}) => {
  const classes = useStyles({ width, height, bgSize, borderRadius, image });

  return (
    <div className={classes.containerCardTalent}>
      <div
        className={`${classes.cardTalent} ${isFocusable ? 'focusable' : ''}`}
        tabIndex="0"
        onClick={clickHandler}
        data-sn-right={`#i .focusable`}
        data-sn-left={`#i .focusable`}
        onFocus={(e) => {}}
        onKeyUp={(e) => {}}
      >
        {children}
      </div>
      <div className={classes.infoCard}>
        <Typography className={classes.typographyTitle} variant="body1">
          {title}
        </Typography>
        {infoTalent && (
          <Typography className={classes.typographyRol} variant="body2" noWrap>
            {infoTalent}
          </Typography>
        )}
      </div>
    </div>
  );
};
export default CardTalent;
