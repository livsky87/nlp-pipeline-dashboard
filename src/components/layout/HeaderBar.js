import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { signInWithGoogle, auth } from "../../utils/firebase";
import { Avatar, Button, Popover } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  avatarSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  userBox: {
    padding: theme.spacing(2),
  },
}));

export default function HeaderBar({ handleDrawer }) {
  const classes = useStyles();

  const [user, setUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  console.log(user);

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {user ? (
          <div>
            <IconButton color="inherit" onClick={handleClick}>
              <Avatar className={classes.avatarSmall} src={user.photoURL} />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes.userBox}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => auth.signOut()}
                >
                  Logout
                </Button>
              </Typography>
            </Popover>
          </div>
        ) : (
          <IconButton color="inherit" onClick={signInWithGoogle}>
            <AccountCircleIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
