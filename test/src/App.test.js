import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
});

//testing goal number 1. easy to maintain. test for behavior not integration. there are many ways to get a result. test for the result.
//testing goal 2, easy diagnosis of failing test. when a test fails it should be easy to see why.
