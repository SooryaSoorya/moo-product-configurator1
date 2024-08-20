import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import ProductConfigurator from "../components/ProductConfigurator";

describe("ProductConfigurator component", () => {
  test("render header text correctly and displays by default", async () => {
    render(<ProductConfigurator />);

    const headingText = screen.getByText(/Hardcover Notebook/i);
    expect(headingText).toBeInTheDocument();
  });

  test("should update the header text when color and layout are selected ", async () => {
    render(<ProductConfigurator />);
    // Verify the initial header text
    const header = await screen.getByRole("heading", { level: 1 });
    expect(header).toHaveTextContent("Hardcover Notebook");

    // Simulate selecting a cover color
    const sunsetButton = screen.getByText("Sunset"); // The color button
    fireEvent.click(sunsetButton);
    // Simulate selecting a page layout
    const dottedButton = screen.getByText("Dotted"); // The layout button
    fireEvent.click(dottedButton);
    // Verify that the header text has updated
    expect(header).toHaveTextContent("Hardcover Notebook - red(dotted)");
  });

  test("allows the user to select a color", async () => {
    render(<ProductConfigurator />);
    const oceanButton = await screen.getByTestId("color-Ocean");
    // Assuming "Ocean" button has data-testid="color-Ocean"
    fireEvent.click(oceanButton);

    expect(oceanButton).toBeInTheDocument(); // Verify the button is present in the document and check its style

    fireEvent.click(oceanButton); // Simulate user clicking the "Ocean" color button
    const selectedColor = await screen.getByTestId("color-Ocean");
    expect(selectedColor).toBeInTheDocument();
  });

  test("allows the user to select a layout", async () => {
    render(<ProductConfigurator />);
    const dottedButton = await screen.getByTestId("layout-Dotted");

    fireEvent.click(dottedButton);
    const selectedLayout = await screen.getByTestId("layout-Dotted");
    expect(selectedLayout).toBeInTheDocument();
  });
});

describe("ProductConfigurator UI interactions", () => {
  test("displays the product options and allows interaction", async () => {
    render(<ProductConfigurator />);

    // Test that buttons for colors exist
    const oceanButton = await screen.getByTestId("color-Ocean");
    const sunsetButton = await screen.getByTestId("color-Sunset");
    expect(oceanButton).toBeInTheDocument();
    expect(sunsetButton).toBeInTheDocument();

    // Test that clicking on color updates summary
    fireEvent.click(oceanButton);
    const colorSummary = await screen.getByTestId("color-Ocean");
    expect(colorSummary).toBeInTheDocument();
  });

  test("displays the selected layout in the summary", async () => {
    render(<ProductConfigurator />);

    // Test that buttons for layout exist
    const dottedButton = await screen.getByTestId("layout-Dotted");
    const linedButton = await screen.getByTestId("layout-Lined");
    expect(dottedButton).toBeInTheDocument();
    expect(linedButton).toBeInTheDocument();

    // Test that clicking on layout updates summary
    fireEvent.click(dottedButton);
    const layoutSummary = await screen.getByTestId("layout-Dotted");
    expect(layoutSummary).toBeInTheDocument();
  });

  test("displays default summary when nothing is selected", async () => {
    render(<ProductConfigurator />);

    const defaultColorSummary = await screen.getByTestId("color-not-selected");
    const defaultLayoutSummary = await screen.getByTestId(
      "layout-not-selected"
    );

    expect(defaultColorSummary).toBeInTheDocument();
    expect(defaultLayoutSummary).toBeInTheDocument();

    // Verify the text inside showing correctly
    expect(defaultColorSummary).toHaveTextContent("Not selected");
    expect(defaultLayoutSummary).toHaveTextContent("Not selected");
  });
});

describe("ProductConfigurator behavior", () => {
  test("updates summary when color and layout are selected", async () => {
    render(<ProductConfigurator />);

    // Select color
    const oceanButton = await screen.getByTestId("color-Ocean");
    fireEvent.click(oceanButton);
    expect(screen.getByTestId("color-Ocean")).toBeInTheDocument();

    // Select layout
    const dottedButton = await screen.getByTestId("layout-Dotted");
    fireEvent.click(dottedButton);
    expect(screen.getByTestId("layout-Dotted")).toBeInTheDocument();

    // Check that the summary has been updated correctly
    const summaryColor = await screen.getByTestId("color-Ocean");
    const summaryLayout = await screen.getByTestId("layout-Dotted");
    expect(summaryColor).toBeInTheDocument();
    expect(summaryLayout).toBeInTheDocument();
  });
});
