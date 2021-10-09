import { render, screen } from "@testing-library/react";
import Button from ".";

describe('<Button />', () => {
    it('should render the button with the text "Register"', () => {
        render(<Button>Register</Button>);

        const button = screen.getByRole('button', { name: /register/i });

        expect(button).toBeInTheDocument();
    });
});