import React from "react";
import { mount } from "enzyme";

import CommentForm from "components/CommentForm";

let component;

beforeEach(() => {
  component = mount(<CommentForm submitComment={() => {}} />);
});

it("shows label, textarea, and submit button", () => {
  expect(component.find("label")).toHaveLength(1);
  expect(component.find("textarea")).toHaveLength(1);
  expect(component.find("button")).toHaveLength(1);
});

describe("textarea", () => {
  beforeEach(() => {
    component
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    component.update();
  });

  it("has a textarea that can be typed into", () => {
    expect(component.find("textarea").prop("value")).toEqual("new comment");
  });

  it("clears textarea on submit", () => {
    component.find("form").simulate("submit");
    component.update();
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});
