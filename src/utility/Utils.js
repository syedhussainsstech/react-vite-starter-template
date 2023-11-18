import { DefaultRoute } from "../router/routes";
import { AlertTriangle, X } from "react-feather";

// Function to check if a value is a non-empty string or a non-empty number
function isNonEmpty(value) {
  if (typeof value === "string" && value.trim() !== "") {
    return true;
  }
  if (typeof value === "number" && !isNaN(value)) {
    return true;
  }
  return false;
}

// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = (obj) => Object.keys(obj).length === 0;

// ** To check if an object has some field and its value
export const hasNonEmptyFields = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && isNonEmpty(obj[key])) {
      return true;
    }
  }
  return false;
};

export const textCapitalize = (sentence) =>
  sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Truncate Text or Wrapping words
export const truncateWords = (limit, words) => {
  return (words = words.substring(0, limit ?? 20) + "...");
};

// Get First Charactors from the the words of the string
export const getInitialsFromString = (str) => {
  // Split the string into words
  const words = str.split(" ");

  // Get the first letter of each word
  const initials = words.map((word) => word.charAt(0));

  // Join the initials together
  return initials.join("").toUpperCase();
};

export const ErrorToast = ({ text, close }) => {
  return (
    <div className="text-white d-flex">
      <span style={{ flex: "0 0 5%" }}>
        <AlertTriangle color="#ffffff" size={20} strokeWidth={2.5} />{" "}
      </span>
      <div className="d-flex">
        <span className="ms-75 fw-bold">{text}</span>
        {close && (
          <span className="ms-1">
            <X size="18" onClick={close} style={{ cursor: "pointer" }} />
          </span>
        )}
      </div>
    </div>
  );
};

// ** Returns K format from a number
export const kFormatter = (num) =>
  num > 999 ? `${(num / 1000).toFixed(1)}k` : num;

// ** Converts HTML to string
export const htmlToString = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

// ** Checks if the passed date is today
const isToday = (date) => {
  const today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  );
};

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (
  value,
  formatting = { month: "short", day: "numeric", year: "numeric" }
) => {
  if (!value) return value;
  return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
};

// ** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value);
  let formatting = { month: "short", day: "numeric" };

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: "numeric", minute: "numeric" };
  }

  return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
};

// ** Download JSON data into CSV Format
export const downloadJSONToCSVWithFileName = (data, fileName) => {
  let blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
  let url = window.URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};

/**
 ** Return if user is logged in
 ** This is completely up to you and how you want to store the token in your frontend application
 *  ? e.g. If you are using cookies to store the application please update this function
 */
export const isUserLoggedIn = () => localStorage.getItem("userData");
export const getUserData = () => JSON.parse(localStorage.getItem("userData"));
export const getUserId = () => localStorage.getItem("userId");
export const getDistrictId = () => localStorage.getItem("districtId");
export const getTimesheetId = () => localStorage.getItem("timesheetId");
export const getPayPeriodId = () => localStorage.getItem("payPeriodId");

/**
 ** This function is used for demo purpose route navigation
 ** In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 ** Please note role field is just for showing purpose it's not used by anything in frontend
 ** We are checking role just for ease
 * ? NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = (userRole) => {
  if (userRole === "admin" || userRole === "superadmin") return DefaultRoute;
  // if (userRole === "therapist") return "/dashboard/timesheets";
  if (userRole === "therapist") return "/dashboard/home";
  return "/login";
};

// ** React Select Theme Colors
export const selectThemeColors = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#115faa1f", // for option hover bg-color
    primary: "#115faa", // for selected option bg-color
    neutral10: "#115faa1f", // for tags bg-color
    neutral20: "#ededed", // for input border-color
    neutral30: "#ededed", // for input hover border-color
  },
});

// ** Forms Validations
export const AppConstant = {
  RequiredMessage: "Please insert required field.",
  InvalidEmailMessage: "Email is invalid.",
  InvalidNumberMessage: "Number should be in positive integer.",
  PasswordMessage: "Password must match the standard.",
  USPhoneNumberRegex: /^\d{3}-\d{3}-\d{4}$/,
  // PhoneNumberRegex:
  //   /"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/,
  // PhoneNumberRegex:
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  PhoneNumberMessage: "Phone is not valid",
  MultiEmailRegax:
    /^([A-Za-z0-9\.|-|_]*[@]{1}[A-Za-z0-9\.|-|_]*[.]{1}[a-z]{2,5})(,[A-Za-z0-9\.|-|_]*[@]{1}[A-Za-z0-9\.|-|_]*[.]{1}[a-z]{2,5})*?$/,
  SingleEmailRegax: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  OnlyNumberRegax:
    /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,38})?)(?:e[+-]?\d+)?$/,
  AplhaRegax: /^[a-zA-Z '.-]*$/,
  AlphaNameRegax: /^[a-zA-Z ]*$/,
  AlphaNumericRegax: /^[a-zA-Z0-9 '.-]*$/,
  AlphaSpecialNumeri: /^[a-zA-Z0-9 '.\-!@#$%^&*()]*$/,
  PasswordRegex:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/`~]).{6,30}$/,
  USZipCodeRegax: /^[0-9]{5}$/,
  SessionTimeout: 1000 * 60 * 60 * 2, // two hours
  MiliSecondRegax: /\.\d{3}$/,
};

export const RoleType = {
  therapist: 1,
  admin: 2,
  superadmin: 3,
};
