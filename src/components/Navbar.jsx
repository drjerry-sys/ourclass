import { AppBar, Avatar, Box, Button, Toolbar, Typography, styled } from '@mui/material'
import logo from "../assets/logo.png"
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#04003F",
})

const SubToolbar = styled("div") ({
    display: "flex",
    backgroundColor: "#fff",
    padding: "10px 30px",
})

const LogoBox = styled("div") ({
    display: "flex",
    alignItems: "center",
    color: "rgb(225,225,255)"
})

const HotelAvatar = styled("div") ({
    display: "flex"
})

const MenuBox = styled(Box) ({
    display: "flex"
})

const menuOptions = ["Settings", "Competitors", "Scales", "Override dates", "Room types", "Notes", "Budget&Forecast", "Reports", "Calendar"]

const subMenu = ["Main Yield", "Yield History", "Market Place", "Forecasts", "Monthly Tools", "Past Monthly Totals", "DOW YOY", "Top-10" ]

export const Navbar = () => {
    const [hotel, setHotel] = useState("")
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <LogoBox >
                <img src={logo} alt="dividendratio-logo" height={30} />
                <Typography variant="h6">Dividend Ratio</Typography>
            </LogoBox>
            <MenuBox>
                {menuOptions.map(menu => (
                    <Button size="small" sx={{textTransform: "capitalize", color: "wheat"}}>{menu}</Button>
                ))}
            </MenuBox>
            <HotelAvatar>
                {hotel ? <Typography>{hotel}</Typography> : ""}
                <Avatar sx={{ height: 30, width: 30 }}></Avatar>
            </HotelAvatar>
        </StyledToolbar>
        <SubToolbar>
                {subMenu.map(menu => (
                    <Button size="small" sx={{textTransform: "capitalize"}}>{menu}</Button>
                ))}
        </SubToolbar>
    </AppBar>

  )
}
