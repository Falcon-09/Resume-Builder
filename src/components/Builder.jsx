import { TabList, Tabs, Tab, TabPanels, TabPanel, Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useResume } from '../Context'
import About from './BuildFunctions/About'
import Education from './BuildFunctions/Education'
import Projects from './BuildFunctions/Projects'
import Skills from './BuildFunctions/Skills'
import Work from './BuildFunctions/Work'

const Builder = () => {

    return (
        <Box
            bg={'white'}
            w={'full'}
            maxW={'xl'}
            rounded={'md'}
            shadow={'md'}
            overflow={'hidden'}
        >
            <Tabs isFitted variant='enclosed'>
                <TabList>
                    <Tab><Text fontWeight={'medium'}>About</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Education</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Skills</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Work</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Projects</Text></Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <About />
                    </TabPanel>
                    <TabPanel>
                        <Education />
                    </TabPanel>
                    <TabPanel>
                        <Skills />
                    </TabPanel>
                    <TabPanel>
                        <Work />
                    </TabPanel>
                    <TabPanel>
                        <Projects />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Builder