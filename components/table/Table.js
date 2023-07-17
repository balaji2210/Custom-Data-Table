import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";

import styles from "./Table.module.css";

const CustomTable = ({ columns = [], rows = [], title = "Results" }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h4>{title}</h4>
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
            {rows?.map((item) => (
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
