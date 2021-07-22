import { FiPlusCircle } from 'react-icons/fi';
import { Container } from './styles';

interface HeaderProps {
    title: string;
    btnText?: string;
}

export default function Header({ title, btnText }: HeaderProps) {
    return (
        <Container>
            <h1>{title}</h1>
            {btnText ? (
                <button><FiPlusCircle /> {btnText}</button>
            ) : ''}
        </Container>
    );
}