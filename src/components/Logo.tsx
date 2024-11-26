import { Box, Typography, Stack } from "@mui/material";

export const Logo = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: {
          xs: "0px",
          md: "10px",
        },
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          marginBottom: {
            xs: "10px",
            md: "0",
          },
        }}
      >
        <a
          href="https://missis-laser.ru"
          style={{ width: "50px", display: "block" }}
        >
          <img
            src="../../assets/logo-color.png"
            alt="Миссис Лазер"
            style={{ width: "100%", display: "block" }}
          />
        </a>
      </Stack>

      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: "12px",
          lineHeight: "26px",
          fontWeight: 400,
          color: "text.primary",
          maxWidth: "240px",
          wordWrap: "break-word",
          textAlign: "center",
          margin: "0px",
          marginTop: "0px",
        }}
      >
        Сеть клиник лазерной эпиляции и косметологии
        <Box component="span" sx={{ color: "text.secondary" }}>
          «Миссис Лазер»
        </Box>
      </Typography>
    </Stack>
  );
};
