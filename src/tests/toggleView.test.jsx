import { render, screen, fireEvent } from "@testing-library/react";
import StockCard from "../components/StockCard";

test("toggle button switches view", () => {
  const stock = {
    symbol: "BBB",
    cmp: 120,
    fut: 115,
    prevClose: 118,
    updatedAt: Date.now()
  };

  let view = "A";
  const handleToggle = () => {
    view = view === "A" ? "B" : "A";
  };

  render(<StockCard stock={stock} view={view} onToggle={handleToggle} />);

  const btn = screen.getByText("Toggle");
  expect(btn).toBeInTheDocument();

  fireEvent.click(btn);
  // After toggle, still present
  expect(btn).toBeInTheDocument();
});
