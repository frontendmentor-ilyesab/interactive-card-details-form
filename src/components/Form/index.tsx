import { SimpleGrid } from "@chakra-ui/react";
import FormElement from "@components/Form/FormElement";
import Button from "@/components/Shared/Button";
import { Form as FormikForm } from "formik";
import FormElementGroup from "@components/Form/FormElementGroup";

export default function Form() {
  return (
    <SimpleGrid
      as={FormikForm}
      px={{ base: 6, md: 0 }}
      ms={{ xl: "30%", xxl: "38%" }}
      spacing={{ base: 5, md: 7 }}
      pb={{ base: 12, md: 0 }}
      maxW={{ md: "700px", lg: "400px" }}
      alignSelf={{ base: "center" }}
      justifySelf={{ md: "center", xl: "unset" }}
      noValidate
      autoComplete="off"
    >
      <FormElement
        label="Cardholder Name"
        placeholder="e.g. Jane Appleseed"
        name="holderName"
        maxLength={24}
      />
      <FormElement
        label="Card Number"
        placeholder="e.g. 1234 5678 9123 0000"
        name="cardNumber"
        maxLength={19}
        onBeforeInput={(e: React.CompositionEvent<HTMLInputElement>) => {
          const input = e.currentTarget;
          const inputLength = input.value.length;
          const lastLetter = input.value[inputLength - 2];
          const numberOfLetters = input.value.replace(/\s/g, "").length;
          const numberOfLettersWithoutData = numberOfLetters - 1;
          const data = e.nativeEvent.data;
          // After the user types 4 characters. insert a space
          if (
            numberOfLetters % 4 === 0 &&
            inputLength < input.maxLength &&
            ![null, " "].includes(data)
          ) {
            input.value += " ";
          }
          // If the number of characters is a multiple of four and the user types a character.
          // insert a space before that character if the space is not already there
          else if (
            numberOfLettersWithoutData > 0 &&
            numberOfLettersWithoutData % 4 === 0 &&
            ![null, " "].includes(data) &&
            lastLetter !== " "
          ) {
            input.value = input.value.slice(0, -1);
            input.value += " " + data;
          }
          // Stop the user from adding multiple spaces or add a space when they haven't entered 4 characters
          else if (
            (lastLetter === " " && data === " ") ||
            (numberOfLetters % 4 !== 0 && data === " ")
          ) {
            input.value = input.value.slice(0, -1);
          }
        }}
      />
      <SimpleGrid columns={2} spacing={{ base: 3, md: 5 }}>
        <FormElementGroup
          label="Exp. Date (MM/YY)"
          inputs={[
            { placeholder: "MM", name: "expiryDate.month", maxLength: 2 },
            { placeholder: "YY", name: "expiryDate.year", maxLength: 2 },
          ]}
          sharedName="expiryDate"
        />
        <FormElement
          label="CVC"
          placeholder="e.g. 123"
          name="cvc"
          maxLength={3}
        />
      </SimpleGrid>
      <Button type="submit" text="Confirm" mt={{ base: 2, md: 3 }} />
    </SimpleGrid>
  );
}
