import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { FiChevronRight } from 'react-icons/fi';

import { Container, Content, Card } from './styles';
import { Link } from 'react-router-dom';

import userImg from '../../assets/user.png';

export default function Request() {
    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Solicitações de voluntários" />
                <main>
                    <Card>
                        <div>
                            <img src={userImg} alt="Leonardo" />
                            <div>
                                <span>Nome</span>
                                <strong>Leonardo</strong>
                            </div>
                        </div>
                        <div>
                            <span>Idade</span>
                            <strong>21</strong>
                        </div>
                        <div>
                            <span>Contato</span>
                            <strong>(16)99189-2091</strong>
                        </div>
                        <Link to="/edit"><FiChevronRight size="30" /></Link>
                    </Card>
                </main>
            </Content>
        </Container>
    );
}