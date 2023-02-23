import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { BiRocket } from 'react-icons/bi'
import { RiMoonFill } from 'react-icons/ri'
import { FaPaintBrush } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'
import { FaAccessibleIcon } from 'react-icons/fa'

import { Box, Text, Heading, HStack, Container, SimpleGrid, LightMode } from '@chakra-ui/react'
export default function Feature() {
  return (
    <Box py="20" as='section' >

      <Box textAlign={"center"} >
        <Text color={"blue.500"} fontWeight="semibold" fontSize={"30"}>Feature</Text>
        <Heading fontWeight="semibold">What you can expect?</Heading>
        <Text fontSize={"18"} py="3">A bundle of 220+ ready-to-use, responsive and accessible components
          with clever structured sourcecode files
        </Text>
      </Box>
      {/* 6 Features */}

      <Container maxW={1200}>
        <Box mt="10">
          <SimpleGrid columns={2} spacing={10}  >

            {/*  Features - 1 */}
            <Box>
              <HStack>
                {/*  react-icons Star */}
                <Box color={'blue.500'}>
                  <AiOutlineStar size={40} />
                </Box>
                {/* End react-icons  */}
                <Box>
                  <Heading fontWeight={"semibold"} fontSize={25}> 220+ components </Heading>
                  <Text >All our components are come with a light and dark  color mode by default
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/*   End Features -  1 */}
            {/*  Features - 2 */}
            <Box>
              <HStack>
                {/*  react-icons Rocket */}
                <Box color={'blue.500'}>
                  <BiRocket size={40} />
                </Box>
                {/*  End react-icons  */}

                {/*  Text & Heading custamizable */}
                <Box>
                  <Heading fontWeight={"semibold"} fontSize={25}> Customizable</Heading>
                  <Text >Your style your brand .Customize the components as you need them.It's
                    that simple.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/*   End Features - 2 */}

            {/*  Features - 3 */}
            <Box>
              <HStack>
                {/*  react-icons Moon */}
                <Box color={'blue.500'}>
                  <RiMoonFill size={40} color={'blue.500'} />
                </Box>
                {/* End react-icons  */}
                <Box>

                  <Heading fontWeight={"semibold"} fontSize={25}> Light & Dark </Heading>
                  <Text >All our components are come with a light and dark  color mode by default.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/*   End Features -3 */}
            {/*  Features - 4 */}
            <Box>
              <HStack>
                {/*  react-icons Paint */}
                <Box color={'blue.500'}>
                  <FaPaintBrush size={40} color={'blue.500'} />
                </Box>
                {/*  End react-icons  */}

                {/*  Text & Heading */}
                <Box>
                  <Heading fontWeight={"semibold"} fontSize={25}> Themable </Heading>
                  <Text >Your style your brand .Customize the components as you need them.It's
                    that simple.
                  </Text>
                </Box>
                {/* End Text & Heading */}
              </HStack>
            </Box>
            {/*   End Features - 4 */}

            {/*  Features - 5 */}
            <Box>
              <HStack>
                {/* react-icons Code  */}
                <Box color={'blue.500'}>
                  <BsCodeSlash size={40} />
                </Box>
                {/* End  react-icons */}

                {/* Text & Heading */}
                <Box>
                  <Heading fontWeight={"semibold"} fontSize={25}> Developer Friendly </Heading>
                  <Text >Components are semantically divided into several files for better
                    developer experience.
                  </Text>
                </Box>
                {/* Text & Heading  Developer Friendly*/}
              </HStack>
            </Box>
            {/*   End Features - 5 */}
            {/*  Features - 6 */}
            <Box>
              <HStack>
                {/* react-icons */}
                <Box color={'blue.500'}>
                  <FaAccessibleIcon size={40}/>
                </Box>
                {/*  End react-icons */}

                {/*  Text & Heading  Accessible*/}
                <Box>
                  <Heading fontWeight={"semibold"} fontSize={25}> Accessible </Heading>
                  <Text >Accesssibility first.That's why we pay attention to Accesssibility right from start.
                  </Text>
                </Box>
                {/*   End  Text & Heading */}
              </HStack>

            </Box>
            {/*   End Features - 6 */}

          </SimpleGrid>
        </Box>
        {/* 6 Features  End*/}
      </Container>
    </Box>
  )
}
