import { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { ProductTable } from "./components";
import { getProducts } from "./api/products";

jest.mock("./api/products");

test("renders navigation bar", async () => {
  act(() => {
    render(<App />);
  });

  await waitFor(() => {
    const navElement = screen.getByText(/Zen Technical Assessment/i);
    expect(navElement).toBeInTheDocument();
  });
});

test("fetches and displays products", async () => {
  act(() => {
    getProducts.mockResolvedValue([
      { id: 1, price: { value: 22, currency: "GBP", rate: "monthly" } },
    ]);
    render(<ProductTable />);
  });
  await waitFor(() => expect(screen.getByText(/22/i)).toBeInTheDocument());
});
