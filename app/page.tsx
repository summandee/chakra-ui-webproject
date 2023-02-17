'use client'

import { Box, Button, Flex, HStack, Image, List, ListItem} from "@chakra-ui/react"


export default function Home() {
  return (
    <Box  padding={50}>
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
         <Button variant={"outline"}> 
            go to piaic
         </Button>
       </Box>
       </Flex>
    </Box>
    
  )
}
