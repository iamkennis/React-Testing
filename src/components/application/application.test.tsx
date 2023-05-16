import { render, screen , getByRole} from "@testing-library/react";
import Application from "./application";
import React from 'react'

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);
    
    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();

    const sectionElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionElement).toBeInTheDocument();

    const paragraphElement = screen.getByText((content) =>
      content.startsWith("All")
    );
    expect(paragraphElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("FullName");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Kennis");
    expect(nameElement4).toBeInTheDocument();

    // const bioElement = screen.getByRole('textbox', {
    //   name: "Bio"
    // });
    // expect(bioElement).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
