import { FiPlusCircle } from 'react-icons/fi';
import { Container } from './styles';

interface HeaderProps {
    title: string;
    btnText?: string;
    openModal?: () => void;
}

export default function Header({ title, btnText, openModal }: HeaderProps) {
    return (
        <Container>
            <h1>{title}</h1>
            {btnText ? (
                <button onClick={openModal}><FiPlusCircle /> {btnText}</button>
            ) : ''}
        </Container>
    );
}