import React from 'react'
import { Navbar } from '../components/Navbar'
import { MainYield } from '../components/MainYield'
import { Box } from '@mui/material'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{padding: "10px 30px"}}>
        <MainYield />
      </Box>
    </>
  )
}
