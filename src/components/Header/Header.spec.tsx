import { render } from "@testing-library/react";
import Header from ".";

const mock = {
    title: 'Dashboard',
    btnText: 'Register'
}

describe('<Header />', () => {
    it('should render Header correctly', () => {
        const { debug } = render(<Header {...mock} />);

        debug();
    });
});