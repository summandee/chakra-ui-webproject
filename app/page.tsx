'use client'
import React from 'react';
import Header from '@/components/header/Header';
import Topcontainer from '@/components/topcontainer/Topcontainer';
import { Box } from '@chakra-ui/react';
import Feature from '@/components/features/Feature';

export default function Home() {
  return (
    <>
    <Header/>
    <Box as='main'>
    <Topcontainer/>
    <Feature  />
    
    </Box>
    </>
    
  )
}
