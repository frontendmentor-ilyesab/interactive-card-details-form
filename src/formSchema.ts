import * as Yup from "yup";

const EMPTY_ERROR_MESSAGE = "Can't be blank";

const formSchema = Yup.object().shape({
  holderName: Yup.string().trim().required(EMPTY_ERROR_MESSAGE).matches(/\s/, "Wrong format, should be Lname Fname"),
  cardNumber: Yup.string()
    .trim()
    .required(EMPTY_ERROR_MESSAGE)
    .matches(/^(\d{4}\s){3}\d{4}$/, "Wrong format, numbers only"),
  expiryDate: Yup.object().shape({
    month: Yup.string()
      .trim()
      .required(EMPTY_ERROR_MESSAGE)
      .matches(/\d{2}/, "Wrong format, month should be MM")
      .test("month", "Month must be between 01 and 12", (value) => {
        const number = parseInt(value);
        if (isFinite(number)) {
          return number >= 1 && number <= 12;
        }
        return false;
      }),
    year: Yup.string()
      .trim()
      .required(EMPTY_ERROR_MESSAGE)
      .matches(/\d{2}/, "Wrong format, year should be YY")
      .test("year", "Year must be current or later", (value) => {
        const number = parseInt(value);
        if (isFinite(number)) {
          const currentYear = new Date().getFullYear();
          const currentYearShort = parseInt(currentYear.toString().slice(-3));
          console.log(currentYear, currentYearShort);
          if (isFinite(currentYearShort)) {
            return number >= currentYearShort;
          }
        }
        return false;
      }),
  }),
  cvc: Yup.string()
    .trim()
    .required(EMPTY_ERROR_MESSAGE)
    .matches(/\d{3}/, "Wrong format, should be NNN"),
});

export default formSchema;