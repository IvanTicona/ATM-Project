import { toast } from "react-toastify";

const [digit, setDigit] = useState(3);

const handleButtonClick = () => {
  if (digit == -1) {
    setState((prevState) => ({
      ...prevState,
      pin: pin,
    }));
  } else {
    notify("El pin debe tener 4 dígitos.");
  }
};



onClick={() => {
  if (digit >= 0) {
    setPin(pin + numero * Math.pow(10, digit));
    setDigit(digit - 1);
  } else {
    toast("No se pueden introducir más de 4 dígitos.");
  }
}}