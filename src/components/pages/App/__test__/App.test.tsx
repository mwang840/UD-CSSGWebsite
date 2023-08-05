import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "@/components/pages/App/App";

test("CS SG image exists on all pages", async () => {
  render(<App />);
  const social_good = await screen.findByAltText(/Cs\+Sg/i);
  expect(social_good).toBeVisible();
});

test("All links work", async () => {
  render(<App />);
  const allLinks = screen.getAllByRole("link");
  for (const eachLink of allLinks) {
    expect(eachLink).toBeVisible();
    fireEvent.click(eachLink);
  }
});
