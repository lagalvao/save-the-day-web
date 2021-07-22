import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { FiChevronRight } from 'react-icons/fi';

import { Container, Content, Card } from './styles';
import { Link } from 'react-router-dom';

export default function Donation() {
    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Contas" btnText="Adicionar contas" />
                <main>
                    <h2>Escolha contas para receber as doações</h2>
                    <Card>
                        <div>
                            <span>Banco</span>
                            <strong>Bradesco</strong>
                        </div>
                        <div>
                            <span>Agência</span>
                            <strong>2345</strong>
                        </div>
                        <div>
                            <span>Conta</span>
                            <strong>5687/6</strong>
                        </div>
                        <div>
                            <span>Operação</span>
                            <strong>000</strong>
                        </div>
                        <Link to="/edit"><FiChevronRight size="30" /></Link>
                    </Card>
                    <Card>
                        <div>
                            <span>Banco</span>
                            <strong>Bradesco</strong>
                        </div>
                        <div>
                            <span>Agência</span>
                            <strong>2345</strong>
                        </div>
                        <div>
                            <span>Conta</span>
                            <strong>5687/6</strong>
                        </div>
                        <div>
                            <span>Operação</span>
                            <strong>000</strong>
                        </div>
                        <Link to="/edit"><FiChevronRight size="30" /></Link>
                    </Card>
                </main>
            </Content>
        </Container>
    );
}