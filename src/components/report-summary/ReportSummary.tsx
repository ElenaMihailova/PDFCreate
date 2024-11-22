import React from "react";
import { Box, Typography } from "@mui/material";

interface ReportSummaryProps {
  data: {
    clinicName: string;
    INN: string;
    KPP: string;
  };
  year: number;
  reportNumber: string;
  reportCorNumber: string;
  responsibility: {
    lastName: string;
    firstName: string;
    middleName: string;
    date: string;
  };
  taxpayer: {
    lastName: string;
    firstName: string;
    middleName: string;
    taxpayerId?: string;
    birthDate: string;
    documentCode?: string;
    documentNumber: string;
    documentIssueDate: string;
  };
  patient: {
    lastName: string;
    firstName: string;
    middleName: string;
    taxpayerId?: string;
    birthDate?: string;
    documentNumber?: string;
    documentIssueDate?: string;
  };
}

export const ReportSummary: React.FC<ReportSummaryProps> = ({
  data,
  year,
  reportNumber,
  reportCorNumber,
  responsibility,
  taxpayer,
  patient,
}) => {
  const fields = [
    { label: "Название клиники", value: data.clinicName },
    { label: "ИНН", value: data.INN },
    { label: "КПП", value: data.KPP },
    { label: "Отчетный год", value: year.toString() },
    { label: "Номер справки", value: reportNumber.toString() },
    { label: "Номер корректировки", value: reportCorNumber.toString() },
    { label: "Ответственный: Фамилия", value: responsibility.lastName },
    { label: "Ответственный: Имя", value: responsibility.firstName },
    { label: "Ответственный: Отчество", value: responsibility.middleName },
    { label: "Дата подписания", value: responsibility.date },
    { label: "Налогоплательщик: Фамилия", value: taxpayer.lastName },
    { label: "Налогоплательщик: Имя", value: taxpayer.firstName },
    { label: "Налогоплательщик: Отчество", value: taxpayer.middleName },
    {
      label: "Налогоплательщик: ИНН",
      value: taxpayer.taxpayerId || "Не указано",
    },
    { label: "Налогоплательщик: Дата рождения", value: taxpayer.birthDate },
    {
      label: "Налогоплательщик: Серия и номер паспорта",
      value: taxpayer.documentNumber,
    },
    {
      label: "Налогоплательщик: Дата выдачи",
      value: taxpayer.documentIssueDate,
    },
    { label: "Пациент: Фамилия", value: patient.lastName },
    { label: "Пациент: Имя", value: patient.firstName },
    { label: "Пациент: Отчество", value: patient.middleName },
    { label: "Пациент: ИНН", value: patient.taxpayerId || "Не указано" },
    {
      label: "Пациент: Дата рождения",
      value: patient.birthDate || "Не указано",
    },
    {
      label: "Пациент: Серия и номер документа",
      value: patient.documentNumber || "Не указано",
    },
    {
      label: "Пациент: Дата выдачи документа",
      value: patient.documentIssueDate || "Не указано",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Данные для формирования справки
      </Typography>
      <Box>
        {fields.map((field, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography variant="body1">
              <strong>{field.label}:</strong>
            </Typography>
            <Typography variant="body1">{field.value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
