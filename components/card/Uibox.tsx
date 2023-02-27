import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,  SimpleGrid } from '@chakra-ui/react'
import { Container,Text, Heading, Button } from '@chakra-ui/react'
export default function Uibox() {
    return (
        <Container maxW={1200}>
            <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme={"blue"}>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme={"blue"}>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme={"blue"}>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme={"blue"}>View here</Button>
                    </CardFooter>
                </Card>


            </SimpleGrid>
        </Container>
    )
}
