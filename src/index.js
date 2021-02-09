import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// pick a date util library
import DateFnsUtils from "@date-io/date-fns";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import reportWebVitals from "./reportWebVitals";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./reducers";

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <ChakraProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={store}>
          <React.StrictMode>
            <Routes />
          </React.StrictMode>
        </Provider>
      </MuiPickersUtilsProvider>
    </ChakraProvider>
  </DndProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
