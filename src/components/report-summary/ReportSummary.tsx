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
  const groupedFields = [
    {
      title: "Общая информация",
      fields: [
        { label: "Название клиники", value: data.clinicName },
        { label: "ИНН", value: data.INN },
        { label: "КПП", value: data.KPP },
        { label: "Отчетный год", value: year.toString() },
        { label: "Номер справки", value: reportNumber.toString() },
        { label: "Номер корректировки", value: reportCorNumber.toString() },
      ],
    },
    {
      title: "Ответственный",
      fields: [
        { label: "Фамилия", value: responsibility.lastName },
        { label: "Имя", value: responsibility.firstName },
        { label: "Отчество", value: responsibility.middleName },
        { label: "Дата подписания", value: responsibility.date },
      ],
    },
    {
      title: "Налогоплательщик",
      fields: [
        { label: "Фамилия", value: taxpayer.lastName },
        { label: "Имя", value: taxpayer.firstName },
        { label: "Отчество", value: taxpayer.middleName },
        {
          label: "ИНН",
          value: taxpayer.taxpayerId || "Не указано",
        },
        { label: "Дата рождения", value: taxpayer.birthDate },
        {
          label: "Серия и номер паспорта",
          value: taxpayer.documentNumber,
        },
        {
          label: "Дата выдачи паспорта",
          value: taxpayer.documentIssueDate,
        },
      ],
    },
    ...(indicatorValue === "1"
      ? []
      : [
          {
            title: "Пациент",
            fields: [
              { label: "Фамилия", value: patient.lastName },
              { label: "Имя", value: patient.firstName },
              { label: "Отчество", value: patient.middleName },
              {
                label: "ИНН",
                value: patient.taxpayerId || "Не указано",
              },
              {
                label: "Дата рождения",
                value: patient.birthDate || "Не указано",
              },
              {
                label: "Серия и номер документа",
                value: patient.documentNumber || "Не указано",
              },
              {
                label: "Дата выдачи документа",
                value: patient.documentIssueDate || "Не указано",
              },
            ],
          },
        ]),
    {
      title: "Финансовая информация",
      fields: [
        {
          label: "Сумма расходов на медицинские услуги (код услуги «1»)",
          value: financialInfo.serviceCode1Expense.toLocaleString("ru-RU"),
        },
        {
          label: "Сумма расходов на медицинские услуги (код услуги «2»)",
          value: financialInfo.serviceCode2Expense.toLocaleString("ru-RU"),
        },
      ],
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Данные для формирования справки
      </Typography>
      {groupedFields.map((group, groupIndex) => (
        <Box key={groupIndex} sx={{ marginBottom: 3 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "left" }}
          >
            {group.title}
          </Typography>
          {group.fields.map((field, fieldIndex) => (
            <Box
              key={fieldIndex}
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
      ))}
    </Box>
  );
};
