import { render, screen } from "@testing-library/react";
import FramedImage from "../../../../src/assets/components/FramedImage";

describe("FramedImage component", () => {
    it("should render FramedImage component correctly", () => {
        render(<FramedImage />);
        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    });
});