import { SimpleGrid, Heading, VisuallyHidden } from "@chakra-ui/react";
import Header from "@/components/Header";
import Form from "@/components/Form";
import ThankYou from "@components/ThankYou";
import { Formik } from "formik";
import formSchema from "@/formSchema";

import { useState } from "react";

import { useFormValues, useFormValuesDispatch } from "@/Hooks/hooks";

type State = "initial" | "submitted";

function App() {
  const [view, setView] = useState<State>("initial");
  const formValues = useFormValues();
  const formValuesDispatch = useFormValuesDispatch();

  function handleSubmit() {
    setView("submitted");
  }

  function handleReset() {
    setView("initial");
    formValuesDispatch({ type: "reset" });
  }

  return (
    <SimpleGrid
      columns={{ lg: 2 }}
      templateColumns={{
        lg: "max-content minmax(0, 1fr)",
      }}
      templateRows={{
        base: "240px",
        lg: "unset",
      }}
      spacing={{ base: 20, lg: 0 }}
      minH="100vh"
      as="main"
    >
      <Header />
      <VisuallyHidden>
        <Heading as="h1">Card Details Form</Heading>
      </VisuallyHidden>
      <Formik
        initialValues={formValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <>
          {view === "initial" && <Form />}
          {view === "submitted" && <ThankYou />}
        </>
      </Formik>
    </SimpleGrid>
  );
}

export default App;
