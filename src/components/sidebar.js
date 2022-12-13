import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { getActivatedItem } from "../utils";
import {sidebarObj} from "../sidebarObj"


function Dropdown({ ListItem, active, path }) {
  const { hash, parent_hash, title, childrens } = ListItem;
  const [open, setOpen] = React.useState(active);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {childrens.map((ele) => {
            return (
              <ListItemButton
                key={ele.hash}
                sx={{ pl: 4 }}
                selected={path == ele.hash}
                href={`/${hash}/${ele.hash}`}
              >
                <ListItemText primary={ele.title} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

export default function Sidebar() {
  const path = getActivatedItem(window.location.pathname);
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Sidebar
        </ListSubheader>
      }
    >
      {sidebarObj.map((ele) => {
        let active = path[0] == ele.hash;
        return ele.childrens.length > 0 ? (
          <Dropdown
            key={ele.hash}
            ListItem={ele}
            active={active}
            path={path[1]}
          />
        ) : (
          <ListItemButton
            key={ele.hash}
            selected={active}
            href={`/${ele.hash}`}
          >
            <ListItemText primary={ele.title} />
          </ListItemButton>
        );
      })}
    </List>
  );
}
