import React from 'react'
import Login from '../../../../pages/login'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

beforeAll(() => {
    jest.mock('react-cookie');
    jest.mock('@vidispine/vdt-api');
});

describe('Login Page', () => {

    it('should render correctly', () => {
        const { asFragment } = render(<Login />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should contain credential fields', () => {
        render(<Login />);

        const usernameField = screen.getByTestId('Username');
        expect(usernameField).toBeVisible();
        expect(usernameField).toBeEnabled();

        const passwordField = screen.getByTestId('Password');
        expect(passwordField).toBeVisible();
        expect(passwordField).toBeEnabled();

        const loginButton = screen.getByTestId('Sign in');
        expect(loginButton).toBeVisible();
        expect(loginButton).toBeEnabled();
    });
});
