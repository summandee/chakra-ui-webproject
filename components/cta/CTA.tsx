import React from 'react'
import { Box, Text, Heading, Container, Button, HStack } from '@chakra-ui/react';
export default function CTA() {
    return (


        <Box >
            <Container  bg ='blue.100' p="10" maxW={1200}>
            <HStack>
                <Box flex={3}>
                <Heading fontWeight="bold">Try our free components</Heading>
                <Text fontSize={"20"} py="3">You don't have to buy a pig in a poke - you can experience
                    our free comunity components before making purchase decision.
                </Text>
                </Box>
                <Box flex={1} >
                <Button colorScheme={"blue"}  px={10} float={"right"}>View Components</Button>
                </Box>
            </HStack>
            </Container >
        </Box>


    )
}
