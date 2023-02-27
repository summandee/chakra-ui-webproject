'use client'
import React from 'react';
import Header from '@/components/header/Header';
import { Box } from '@chakra-ui/react';
import Topcontainer from '@/components/topcontainer/Topcontainer';
import Feature from '@/components/features/Feature';
import CTA from '@/components/cta/CTA';
import Highlight from '@/components/highlight/Highlight';
import Uibox from '@/components/card/Uibox';
import NewsLetter from '@/components/newsletter/NewsLetter';

export default function Home() {
  return (
    <>
    <Header/>
    <Box as='main'>
    <Topcontainer/>
    <Feature  />
    <CTA />
    <Highlight />
    <NewsLetter />
    <Uibox/>
    </Box>
    </>
    
  )
}
