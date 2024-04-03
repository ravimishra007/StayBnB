import { FC, useEffect, useState } from "react";
import fetchData from "./fetchData";
import Data from "../../../utils/AdminDataInterface";
import {
  Box,
  Button,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "../../../styles/AdminPage.css";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";
import InitialFocus from "../InitialFocus";

const FetchProperty: FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [page, setPage] = useState<number>(1);
  const pageLimit = 10;
  //   console.log("Data is", data);
  useEffect(() => {
    const fetchFun = async () => {
      try {
        console.log(page);
        const res = await fetchData(page);
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFun();
  }, [page]);
  return (
    <>
      <TableContainer className="adminTable">
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignContent={"flex-end"}
        >
          <InitialFocus />
        </Box>
        <Table
          variant={"striped"}
          size={"sm"}
          colorScheme="beige"
          className="table"
        >
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Host</Th>
              <Th>Features</Th>
              <Th>Location</Th>
              <Th>Price</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          {/* white-space: nowrap; overflow: hidden; text-overflow: ellipsis; */}
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                <Td w={"2"}>{item.id}</Td>
                <Td h={"50px"}>
                  <Image
                    src={item.images[0]}
                    h={"100%"}
                    width={"100%"}
                    aspectRatio={"1/1"}
                    objectFit={"cover"}
                  />
                </Td>
                <Td
                  maxW={"200px"}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                >
                  {item.name}
                </Td>
                <Td
                  maxW={"150px"}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                >
                  {item.host_name}
                </Td>
                <Td>
                  Beds : {item.bedrooms}
                  <br></br>Bath : {item.bathrooms}
                </Td>
                <Td>{item.smart_location}</Td>
                <Td>{item.price * 80}INR</Td>
                <Td>
                  <Button>
                    <EditIcon />
                  </Button>
                </Td>
                <Td>
                  <Button>
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex direction={"row"} gap={"1em"}>
        <Button
          isDisabled={page == 1}
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
          colorScheme="blue"
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          isDisabled={page == pageLimit}
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
          colorScheme="blue"
        >
          <ChevronRightIcon />
        </Button>
      </Flex>
    </>
  );
};
export default FetchProperty;
