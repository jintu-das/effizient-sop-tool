import { Container, Divider, Link, Stack, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import SopForm from "./components/SopForm";

export default function App() {
  function notAvailable() {
    enqueueSnackbar("Service Not Available!");
  }

  return (
    <Container maxWidth="sm" component="main" sx={{ py: 3 }}>
      <Stack justifyContent="center" alignItems="flex-start" pb={6}>
        <img
          loading="lazy"
          height="100%"
          src="https://effizient.ca/assets/img/logo.png"
          alt="Effizient Logo"
        />
      </Stack>

      <Typography variant="h4" gutterBottom>
        Customized SOP Generator
      </Typography>

      <Typography color="text.secondary" paragraph>
        Fill this questionnaire for the student. After submitting, you will
        receive an email at the email address that you have provided with a
        Statement of Purpose customized for you. You can use and modify that as
        per your needs.
      </Typography>

      <Typography color="text.secondary" paragraph>
        If you would like to get it edited, reviewed, or drafted by our experts,
        you can get in touch with us: &nbsp;
        <Link
          href="https://effizient-immigration-inc.square.site/s/shop"
          target="_blank"
        >
          https://effizient-immigration-inc.square.site/s/shop
        </Link>
      </Typography>

      <Divider />

      <Typography fontWeight={700} color="ActiveBorder" variant="body2" py={2}>
        jimcarrey@gmail.com{" "}
        <Typography
          variant="body2"
          component="span"
          fontWeight={500}
          color="primary.main"
          sx={{
            cursor: "pointer",
            textDecoratin: "underline",
          }}
          onClick={notAvailable}
        >
          Switch Account
        </Typography>
      </Typography>

      <Divider />

      <SopForm />
    </Container>
  );
}
