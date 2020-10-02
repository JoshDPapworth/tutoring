import { shallow } from "enzyme";
import * as React from "react";
import { Loading } from "./Loading";

describe("Loading", (): void => {
  it("should render with spinner CSS class", (): void => {
    expect(shallow(<Loading />).exists(".spinner")).toBe(true);
  });
});
