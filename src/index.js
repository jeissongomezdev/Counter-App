import React from "react";
import { createRoot } from "react-dom/client";
import PrimeraApp from "./PrimeraApp";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(<PrimeraApp saludo="Hola Mundo" />);
