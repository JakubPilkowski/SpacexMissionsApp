// import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles"; usuwa błąd związany ze strict modem ale nie jest w pełni stabilny
import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#ff8c00",
    },
  },
});
