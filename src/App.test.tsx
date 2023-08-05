import React from "react";
import { render, screen } from "@testing-library/react";
import social_good from "./components/assets/cs+sg.jpg";
import App from "./App";
import { About } from "./components/pages/About";

// test("Image exists", () => {
//   render(<App />);
//   const sg_img = screen.findAllByAltText(social_good);
//   const social_good = screen.getByAltText(/Cs+Sg/i);
//   expect(social_good).toBeInTheDocument();
// });

test("CS SG image exists on all pages", async () => {
  render(<About />);
  const social_good = await screen.findAllByAltText(/Cs+Sg/i);
  expect(social_good).toBeVisible();
});
