import { shallow } from "enzyme";
import * as React from "react";
import App from "./App";

describe("App", (): void => {
  it("should render", (): void => {
    expect(shallow(<App />)).toHaveLength(1);
  });
});
