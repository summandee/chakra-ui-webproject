import React from 'react'
import { Avatar, AvatarGroup, Box, Button, Heading, HStack, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'

export default function Topcontainer() {
    return (
        <Box backgroundImage={"/images/back1.webp"} backgroundSize={"contain"} py={20}>
            <HStack>

                {/* left Area */}
                <Box w="50%" color={"white"} pl={44}>
                    <Heading fontSize={50}>
                        Build your next idea even faster
                    </Heading>
                    <Text lineHeight={"10"}>One Year Panaverse DAO Earn as you Learn Program.
                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                        Cloud, Edge, and Ambient Computing/IoT Technologies
                    </Text>
                    <Box mt="4">
                        <Button colorScheme={"blue"}>Buy Now</Button>
                        <Button colorScheme={"blue"} variant={"outline"} ml="20px">View Component</Button>
                    </Box>


                </Box>
                {/* right Area */}
                <Box pl="10">
                    <Image src='/images/banner.png' />
                </Box>
            </HStack>
            <Box ml="13%">
            <AvatarGroup size="md" max={4} MT="5">
                
                    <Avatar name='Sir Zia Khan' src='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' />
                    <Avatar name='Sir Adil Altaf' src='https://avatars.githubusercontent.com/u/62209503?v=4' />
                    <Avatar name='Sir OwaisAli' src='https://chakrademosite-ows-ali.vercel.app/me.jpg' />
                    <Avatar name='Sir Qasim' src='/images/qasim.jpeg' />

            </AvatarGroup>
            </Box>

        </Box>

    )
}
