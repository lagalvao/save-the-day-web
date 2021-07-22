import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { FiChevronRight } from 'react-icons/fi';

import { Container, Content, Card } from './styles';
import { Link } from 'react-router-dom';

export default function Schedule() {
    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Eventos" btnText="Adicionar eventos" />
                <main>

                    <Card>
                        <div>
                            <span>Evento</span>
                            <strong>Festa do milho</strong>
                        </div>
                        <div>
                            <span>Data do evento</span>
                            <strong>21/05/2021</strong>
                        </div>
                        <div>
                            <span>Local</span>
                            <strong>Praça da matriz</strong>
                        </div>
                        <Link to="/edit"><FiChevronRight size="30" /></Link>
                    </Card>
                </main>
            </Content>
        </Container>
    );
}