import React from "react";
import ReactDOM from "react-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";

import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
