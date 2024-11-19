import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";

interface TableRowData {
  date: string;
  amount: number;
  service: string;
  includeInCalculation: boolean;
}

const initialData: TableRowData[] = [
  {
    date: "2024-11-19",
    amount: 1000,
    service: "Процедура1",
    includeInCalculation: true,
  },
  {
    date: "2024-11-18",
    amount: 2000,
    service: "Процедура2",
    includeInCalculation: false,
  },
  {
    date: "2024-11-17",
    amount: 3000,
    service: "Процедура3",
    includeInCalculation: true,
  },
];

export const SummaryTable: React.FC = () => {
  const [data, setData] = useState<TableRowData[]>(initialData);

  const handleCheckboxChange = (index: number) => {
    const updatedData = [...data];
    updatedData[index].includeInCalculation =
      !updatedData[index].includeInCalculation;
    setData(updatedData);
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Дата</TableCell>
            <TableCell>Сумма</TableCell>
            <TableCell>Услуга</TableCell>
            <TableCell>Включать в расчет</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.service}</TableCell>
              <TableCell>
                <Checkbox
                  checked={row.includeInCalculation}
                  onChange={() => handleCheckboxChange(index)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
