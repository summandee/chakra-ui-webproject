import React from 'react'
import { Box, Text, Heading, Container, Flex, Center } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { GoDashboard} from 'react-icons/go'
import { FaMoneyCheck } from 'react-icons/fa'

import { AiTwotoneSetting} from 'react-icons/ai'
import { MdSupportAgent} from 'react-icons/md'




export default function Highlight() {
    return (
        <Box mt={10}>
            <Box textAlign={"center"} >
                <Text color={"blue.500"} fontWeight="semibold" fontSize={"22"}>Highlight</Text>
                <Heading fontWeight="bold" fontSize={35} pt="4">Why Chakra UI Pro?</Heading>
                <Text fontSize={"18"} py="3" fontWeight="semibold">Because these beautiful and responsive react components
                    will help you realize your next idea in no time.
                </Text>
            </Box>
            <Container maxW="1200" mt={10}>
                <Flex gap={5}>

                    {/* Card - 1 */}
                    <Card align='center'>
                        <CardHeader>
                            <Center color={'blue.400'}>
                                <GoDashboard size={60} />
                            </Center>
                            <Heading size='md'> Speed up workflow </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text align={"center"}>
                                Quickly put together different components to create an
                                nearly infinite combination of user experiences.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue' px={10}>View here</Button>
                        </CardFooter>
                    </Card>

                    {/* Card - 2 */}
                    <Card align='center'>
                        <CardHeader>
                            <Center color={'blue.400'}>
                                <FaMoneyCheck size={60} />
                            </Center>
                            <Heading size='md'> Save good money </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text align={"center"}>
                                Quickly put together different components to create an
                                nearly infinite combination of user experiences.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue' px={10}>View here</Button>
                        </CardFooter>
                    </Card>

                    {/* Card - 3 */}
                    <Card align='center'>
                        <CardHeader>
                            <Center color={'blue.400'}>
                                <AiTwotoneSetting size={60} />
                            </Center>
                            <Heading size='md'> Easily customizable </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text align={"center"}>
                                Quickly put together different components to create an
                                nearly infinite combination of user experiences.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue' px={10}>View here</Button>
                        </CardFooter>
                    </Card>

                    {/* Card - 4 */}
                    <Card align='center'>
                        <CardHeader>
                            <Center color={'blue.400'}>
                                <MdSupportAgent size={60} />
                            </Center>
                            <Heading size='md'> Support Us </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text align={"center"}>
                                Quickly put together different components to create an
                                nearly infinite combination of user experiences.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue' px={10}>View here</Button>
                        </CardFooter>
                    </Card>
                </Flex>
            </Container>
        </Box>



    )
}
