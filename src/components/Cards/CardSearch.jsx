import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  cardSearch: ({ width, height, borderRadius }) => ({
    background: theme.palette.grayColor.main,
    height: height || 230,
    width: '280px',
    margin: 10,
    borderRadius: borderRadius || 3,
    overflow: 'auto'
  }),
  cardSearchImage: ({ bgSize, image }) => ({
    backgroundImage: `url(${
      image || 'https://i.scdn.co/image/ab67616d00001e028b2c42026277efc3e058855b'
    })`,
    position: 'relative',
    backgroundSize: bgSize || 'cover',
    borderRadius: 3,
    width: '100%',
    height: 160,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }),
  cardSearchContent: () => ({
    padding: '10px 0px 0px 0px',
    textAlign: 'left',
    height: 'auto',
    background: theme.palette.grayColor.main
  }),
  title: ({ width }) => ({
    color: '#2a292b',
    fontSize: 16
  }),
  subTitle: ({ width }) => ({
    color: theme.palette.fontColorPrimary.main,
    width: width,
    fontSize: 13
  })
}));

const CardSearch = ({
  width,
  height,
  bgSize,
  borderRadius,
  title = false,
  image,
  children,
  subTitle,
  history,
  data = {},
  match
}) => {
  const classes = useStyles({ width, height, bgSize, borderRadius, image, subTitle });

  return (
    <div
      className={`${classes.cardSearch}`}
      onClick={(e) => {
        e.preventDefault();
        history.push({
          pathname: data.href || `/albums/${data.id}`
        });
      }}
    >
      <div className={`${classes.cardSearchImage}`}>{children}</div>
      <div className={classes.cardSearchContent}>
        {title && (
          <Typography className={classes.title} variant="body1" noWrap>
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography className={classes.subTitle} variant="body2" noWrap>
            {subTitle}
          </Typography>
        )}
      </div>
    </div>
  );
};
export default withRouter(CardSearch);
