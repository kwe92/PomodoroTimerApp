import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "8.75rem",
        height: "4.375rem",
        justifyContent: "space-between",
      }}
    >
      <h4 style={{ margin: 0 }}>pomodoro</h4>
      <Button
        style={{
          color: "black",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          background: "white",
          padding: "0 1rem",
          margin: 0,
        }}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <KeyboardArrowUpIcon />
            <KeyboardArrowDownIcon />
          </div>
        }
      >
        25
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div
          style={{
            borderRadius: "0.875rem",
            border: "3px solid rgba(194,194,194,0.8)",
            // boxShadow: "2px 4px 8px red"
          }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <AccessTimeIcon />
            15
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <AccessTimeIcon />
            25
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <AccessTimeIcon />
            45
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <AccessTimeIcon />
            52
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <AccessTimeIcon />
            60
          </MenuItem>
        </div>
      </StyledMenu>
    </div>
  );
}
