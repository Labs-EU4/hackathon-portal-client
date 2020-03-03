import React from 'react'
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render, cleanup } from "@testing-library/react";
import UserProfileFormPage from '../UserProfileFormPage';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState } from "../../../utils/mockData";

const history = createMemoryHistory();

afterEach(cleanup);

let component;
let mockStore;
let store;

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
    useSelector: () => ({
        id: 1
    }),
    useSelector: () => ({
        token: 347534574536,
        userId: 1,
        fullname: "Jake Tom",
        email: "somemail@google.com",
        username: "Jake22",
        bio: "",
        image: "",
        image_url: "{['https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500']}"
    }),
}));

beforeEach(() => {
    mockStore = configureStore();
    store = mockStore(initialState);
    component = render(
        <Router history={history}>
            <Provider store={store}>
                <UserProfileFormPage />
            </Provider>
        </Router>
    );
});

describe("UserProfileFormPage.js", () => {
    it("renders the UserProfileFormPage component correctly", () => {
        // expect(component).toMatchSnapshot();
        expect(component.debug())
    });

    //   it("the component renders an a tag to login", () => {
    //     expect(component.queryByAltText(/Hackton - Organise hackathons/i)).toBeInTheDocument();
    //   });

    //   it("the component renders an a tag to login", () => {
    //     expect(component.queryByText(/Log In/i)).toBeInTheDocument();
    //   });

    //   it("the component renders an a tag to signup", () => {
    //     expect(component.queryByText(/Sign Up/i)).toBeInTheDocument();
    //   });
});