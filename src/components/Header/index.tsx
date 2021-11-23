import React, { useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext} from 'styled-components';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title} = useContext(ThemeContext);

    return (
        <Container>
            <Switch 
                    onChange={toggleTheme}       
                    checked={title === 'dark'}  
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={shade(0.30, colors.primary)}
                    onColor={colors.primary}
                    />
        </Container>

    );
};

export default Header;