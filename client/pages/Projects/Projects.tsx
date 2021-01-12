import {
  Thead,
  Tbody,
  Table,
  Tr,
  Th,
  Td,
  Heading,
  TableCaption,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () =>
      await fetch("/api/projects")
        .then((res) => res.json())
        .then(({ data }) => setProjects(data));

    fetchData();
  }, []);

  return (
    <Box
      flex="1.5"
      p={[10, 10, 20, 20]}
      minH="100vh"
      bg="linear-gradient(180.1deg, #CCD0E7 69.99%, rgba(144, 148, 180, 0.73) 99.96%)"
    >
      <Heading textStyle="h1"> Past Projects</Heading>

      <Table size="sm" my={10}>
        <TableCaption>Mere mortals can't achieve what I have </TableCaption>
        <Thead>
          <Tr>
            <Th>Client</Th>
            <Th>Description</Th>
            <Th isNumeric>Hours spent</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project) => (
            <Tr key={project.id}>
              <Td>{project.client}</Td>
              <Td>{project.description}</Td>
              <Td isNumeric>{project.duration}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
