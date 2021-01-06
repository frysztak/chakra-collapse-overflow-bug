import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme as ChakraTheme,
  Collapse,
  useDisclosure,
  Button,
  extendTheme,
  HStack,
} from "@chakra-ui/react"
import Select from 'react-select'
import { useState } from "react";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const styles = {
  global: {
    '.chakra-collapse': {
      overflow: 'initial !important',
    },
  },
};

const fixedTheme = extendTheme({ styles });

export const App = () => {

  const [theme, setTheme] = useState(ChakraTheme);
  const toggleTheme = () => setTheme(theme === ChakraTheme ? fixedTheme : ChakraTheme);
  const { isOpen, onToggle } = useDisclosure()

  return <ChakraProvider theme={theme}>
    <Box maxW="sm" padding={4}>
      <HStack spacing={4}>
        <Button onClick={onToggle}>Click me</Button>
        {isOpen && <Button onClick={toggleTheme}>Toggle theme</Button>}
      </HStack>

      <Collapse in={isOpen}>
        <Box
          p={4}
          paddingBottom={24}
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Select placeholder="Select option" options={options} />
        </Box>
      </Collapse>
    </Box>
  </ChakraProvider>
}
