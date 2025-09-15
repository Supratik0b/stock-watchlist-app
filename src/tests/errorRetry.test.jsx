import { render, screen, fireEvent } from "@testing-library/react";
import ErrorState from "../components/ErrorState";

test("error state shows retry button and calls onRetry", () => {
  const retryFn = jest.fn();

  render(<ErrorState onRetry={retryFn} message="Something went wrong" />);

  expect(screen.getByText("Something went wrong")).toBeInTheDocument();

  const retryBtn = screen.getByText("Retry");
  fireEvent.click(retryBtn);

  expect(retryFn).toHaveBeenCalled();
});
