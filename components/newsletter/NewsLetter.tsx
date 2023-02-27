import React from 'react'
import { Box, Text, Heading, Container, Button, HStack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'

export default function NewsLetter() {
    return (

        <Box mt={20}>
            <Container bg='blue.100' p="10" maxW={1200}>
                <HStack>
                    <Box flex={2}>
                        <Heading fontWeight="bold">Join our Newletter</Heading>
                        <Text fontSize={"20"} py="3">
                            Dont miss any more news and subscribe to our newsletter today.
                        </Text>
                    </Box>

                    <Box   flex={1} >
                    <Input placeholder='Enter Your Email' size='md' />
                    </Box>
                    <Box flex={1} >
                        <Button colorScheme={"blue"} px={10} float={"right"}>Subscribe</Button>
                    </Box>
                </HStack>
            </Container >
        </Box>


    )
}
