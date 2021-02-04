import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import About from "./components/About/About";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyle = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.text.primary },
}));
export default function App() {
  const [cart, setCart] = useState([]);
  const addCart = ({ title, imageUrl, stuffExplanation }) => {
    setCart([...cart, { title, imageUrl, stuffExplanation }]);
  };
  const count = cart.length;
  const classes = useStyle();
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "200px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <Link to="/" state={cart} className={classes.link}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </List>
          </Link>
          <Link to="cart" className={classes.link}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <AddShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary={`Cart(${count})`} />
              </ListItem>
            </List>
          </Link>
          <Link to="wish" className={classes.link}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <ThumbUpIcon />
                </ListItemIcon>
                <ListItemText primary={"Wish List"} />
              </ListItem>
            </List>
          </Link>
          <Link to="about" className={classes.link}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            </List>
          </Link>
        </Drawer>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/" exact>
            <Home addCart={addCart} />
          </Route>
          <Route path="/wish">
            <WishList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
