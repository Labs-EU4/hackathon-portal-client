import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import FormLayout from "../../organisms/FormLayout";
import Form from "../../organisms/Form";
import { initialState } from "../../../utils/mockData";
import { shallow } from 'enzyme'

const history = createMemoryHistory();

afterEach(cleanup);

let jestFeatures;
let mockStore;
let store;

beforeEach(() => {
    mockStore = configureStore();
    store = mockStore(initialState);
    const ctaText1 = "This is the test test";
    const formHeader1 = "Test Title Header";
    const formParagraph1 = "This is the paragraph"
    jestFeatures = render(
        <Router history={history}>
            <Provider store={store}>
                <FormLayout ctaText={ctaText1}
                    formHeader={formHeader1}
                    formParagraph={formParagraph1} />
            </Provider>
        </Router>
    );
});

describe("Form.js ", () => {

    it("it renders the provided props", () => {
        const header = jestFeatures.findByText('Test Title Header')

        expect(jestFeatures).toMatchSnapshot();
    });
});