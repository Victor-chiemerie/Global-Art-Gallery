import React from 'react';
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import Home from '../component/home';
import store from '../redux/store';

describe('Home', () => {
    it('renders correctly for reserved state', () => {
        const tree = renderer.create(
            <Provider store={store}>
            <Home />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});