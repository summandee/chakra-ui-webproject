'use client'
import React from 'react';
import { SearchIcon , MoonIcon} from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, List,Link, ListItem} from "@chakra-ui/react";

export default function Header() {
  return (
    
      <Box  padding={50} as="header">
      <Flex justifyContent={"space-around"} alignItems={"center"}>
      {/* Left Nav area */}
      <Box>
        <HStack >
        <Image src="/images/logo.webp" alt="logo"/>
        <List >
          <HStack align={"center"} spacing={10} ml={40}  fontWeight="bold">
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          </HStack>
        </List>
        </HStack>
      </Box>
      {/* Right Nav area */}
       <Box>
        <Box pl="15" as="span">
         <MoonIcon w="20px" h="20px" pl= "6px"/>
        </Box>
        
        <Box pl="15" as="span">
          <SearchIcon w="20px" h="20px"/>
         </Box>
       <Link href ="https://www.piaic.org" target={"_blank"}>
         <Button variant={"outline"}> 
            go to piaic
         </Button>
        </Link>
       </Box>
       </Flex>
    </Box>
    
  )
}
