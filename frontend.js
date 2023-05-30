import React, { useState, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ref: https://react-bootstrap.github.io/components/buttons/
import { Button } from "react-bootstrap";
// ref: https://icons.getbootstrap.com/
import { Trash } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

// ref: https://mui.com/material-ui/react-button/
// import { Button } from '@mui/material';
// ref: https://mui.com/material-ui/material-icons/
// import { Delete } from "@mui/icons-material";

function Main() {
  const [value, setValue] = useState(1);
  const onClick = useCallback((ev) => setValue((prev) => prev + 1));
  return (
    <div>
      Main <Button onClick={onClick}>+</Button>
      <ul>
        {Array(value)
          .fill(null)
          .map((v, i) => (
            <li key={i}>{Math.random()}</li>
          ))}
      </ul>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    // path: "contacts/:contactId",
    // children: [ .. ],
    // errorElement: <ErrorPage />,,
    element: <Main />,
  },
]);

function Boot() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

createRoot(document.querySelector("#app")).render(<Boot />);
