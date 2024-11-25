import React from "react";
import { Box, Typography } from "@mui/material";
import { ReportSummaryProps } from "../../types";

export const ReportSummary: React.FC<ReportSummaryProps> = ({
  data,
  year,
  reportNumber,
  reportCorNumber,
  responsibility,
  taxpayer,
  patient,
  financialInfo = { serviceCode1Expense: 0, serviceCode2Expense: 0 },
  indicatorValue,
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
    ...(indicatorValue === "1"
      ? []
      : [
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
        ]),
    {
      label: "Сумма расходов на медицинские услуги (код услуги «1»)",
      value: financialInfo.serviceCode1Expense.toLocaleString("ru-RU"),
    },
    {
      label: "Сумма расходов на медицинские услуги (код услуги «2»)",
      value: financialInfo.serviceCode2Expense.toLocaleString("ru-RU"),
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
