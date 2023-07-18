import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { Input } from "@chakra-ui/react";

import styles from "./Table.module.css";
import { useState } from "react";

const CustomTable = ({ columns = [], rows = [], title = "Results" }) => {
  const [search, setSearch] = useState(" ");

  const filteredData = rows?.filter((item) =>
    Object?.values(item)?.some(
      (value) =>
        typeof value === "string" &&
        value?.toLowerCase()?.includes(search?.toLowerCase())
    )
  );

  return (
    <div className={styles.wrapper}>
      <div>
        <h4>{title}</h4>
        <div>
          <Input
            htmlSize={10}
            width="auto"
            value={search}
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr className={styles.tableHeadBg}>
              {columns?.map((item) => (
                <Th>{item}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {filteredData?.map((item) => (
              <Tr>
                {Object?.values(item)?.map((value) => (
                  <Td>{value}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
