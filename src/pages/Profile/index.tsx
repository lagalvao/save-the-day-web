import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CompleteProfile from '../CompleteProfile';
import LocalizationProfile from '../LocalizationProfile';
import AccessProfile from '../AccessProfile';

export default function Profile() {
    const [dice, setDice] = useState(true);
    const [localization, setLocalization] = useState(false);
    const [access, setAccess] = useState(false);

    const handleActivateDice = useCallback(() => {
        setDice(true);
        setLocalization(false);
        setAccess(false);
    }, []);
    
    const handleActivateLocalization = useCallback(() => {
        setDice(false);
        setLocalization(true);
        setAccess(false);
    }, []);
    
    const handleActivateAccess = useCallback(() => {
        setDice(false);
        setLocalization(false);
        setAccess(true);
    }, []);

    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Perfil" />
                <main>
                    <header>
                        <button onClick={handleActivateDice}>Dados</button>
                        <button onClick={handleActivateLocalization}>Localização</button>
                        <button onClick={handleActivateAccess}>Acesso</button>
                    </header>
                    {dice && (
                        <CompleteProfile />
                    ) }
                    {localization && (
                        <LocalizationProfile />
                    )}
                    {access && (
                        <AccessProfile />
                    ) }
                </main>
            </Content>
        </Container>
    );
}