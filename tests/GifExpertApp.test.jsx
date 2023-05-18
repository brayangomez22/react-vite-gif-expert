import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("GifExpertApp", () => {
  test("renders GifExpertApp component", () => {
    render(<GifExpertApp />);
    const titleElement = screen.getByText("GifExpertApp");
    expect(titleElement).toBeTruthy();
  });

  test("adds a new category when onAddCategory is called", () => {
    render(<GifExpertApp />);
    const addCategoryInput = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(addCategoryInput, { target: { value: "New Category" } });
    fireEvent.submit(form);

    const categoryElement = screen.getByText("New Category");
    expect(categoryElement).toBeTruthy();
  });

  test("does not add a duplicate category when onAddCategory is called", () => {
    render(<GifExpertApp />);
    const addCategoryInput = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(addCategoryInput, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    const categoryElements = screen.getAllByText("One Punch");
    expect(categoryElements.length).toBe(1);
  });
});
