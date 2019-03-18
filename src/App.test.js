import React from "react";
import { shallow } from "enzyme";
import NavBar from "./components/navigation/navbar";

import App from "./App";

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

test("renders a navbar", () => {
  const wrapper = shallow(<App />);
  //console.log(wrapper.debug());
  expect(wrapper.contains(<NavBar />)).toBe(true);
});
