import React from "react";
import { shallow } from "enzyme";

import CommentForm from "components/CommentForm";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

let component;

beforeEach(() => {
  component = shallow(<CommentForm />);
});

it("shows label, textarea, and submit button", () => {
  expect(component.find(Form.Label)).toHaveLength(1);
  expect(component.find(Form.Control)).toHaveLength(1);
  expect(component.find(Button)).toHaveLength(1);
});

describe("textarea", () => {
  beforeEach(() => {
    component
      .find(Form.Control)
      .simulate("change", { target: { value: "new comment" } });
    console.log(component.find(Form.Control).text());
  });

  it("has a textarea that can be typed into", () => {
    // expect(component.find(Form.Control).text()).toEqual("new commentssss");
  });

  it("clears textarea on submit", () => {});
});
