import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import Summary from "../components/Summary";

describe("Summary component", () => {
  test("displays selected pageno correctly", () => {
    render(<Summary color="Ocean" layout="Dotted" pages={100} price={11} />);
    const pageNoText = screen.getByText(/100/i);
    expect(pageNoText).toBeInTheDocument();
  });
  test("displays selected color correctly", () => {
    render(<Summary color="Ocean" layout="Dotted" pages={100} price={11} />);
    const colorText = screen.getByText(/Ocean/i);
    expect(colorText).toBeInTheDocument();
  });
  test("displays selected layout correctly", () => {
    render(<Summary color="Ocean" layout="Dotted" pages={100} price={11} />);
    const layoutText = screen.getByText(/Dotted/i);
    expect(layoutText).toBeInTheDocument();
  });
  test("displays selected price correctly", () => {
    render(<Summary color="Ocean" layout="Dotted" pages={100} price={11} />);
    const priceText = screen.getByText(/£11/i);
    expect(priceText).toBeInTheDocument();
  });

  test("displays default text when no selection is made", async () => {
    render(
      <Summary color={null} layout={null} pages={undefined} price={undefined} />
    );

    const noColorElement = screen.getByTestId("color-not-selected");
    expect(noColorElement).toBeInTheDocument();

    const noLayoutElement = screen.getByTestId("layout-not-selected");
    expect(noLayoutElement).toBeInTheDocument();

    const noPageNoElement = screen.getByTestId("page-not-selected");
    expect(noPageNoElement).toBeInTheDocument();

    const noPriceElement = screen.getByTestId("price-not-selected");
    expect(noPriceElement).toBeInTheDocument();
  });
});
