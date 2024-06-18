import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import App from "@/App.tsx";
import { FormProvider } from "@/Provider/FormProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <FormProvider>
        <App />
      </FormProvider>
    </ChakraProvider>
  </React.StrictMode>
);
