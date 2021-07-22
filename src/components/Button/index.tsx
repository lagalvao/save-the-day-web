import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
}

export default function Button({ children, icon, ...rest }: ButtonProps) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    );
}