import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// smokebox and snapshot
it("renders without crashing", () => {
    render(<BoxList />);
})

it("matches snapshots", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

// create a function that allows us to add a box to the boxlist component
function addBox(boxList, height = "2", width = "2", color = "peachpuff") {
    // capture the inputs as the user sees them by their labels 
    const colorInput = boxList.getByLabelText("Color");
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");

    // capture the submit button by its text 
    const button = boxList.getByText("Add Color Box")

    // no we can add data (with the use of fireEvent) to the input fields to add a box with that data 
    fireEvent.change(colorInput, { target: { value: color } });

    fireEvent.change(widthInput, { target: { value: height } });

    fireEvent.change(heightInput, { target: { value: width } });
    // submit
    fireEvent.click(button);
}

it("can add a new box", () => {
    // before we add anything there should be an empty boxlist component 
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("Remove Box")).not.toBeInTheDocument();

    addBox(boxList, 'red', '100', '100')

    expect(boxList.queryByText("Remove Box")).toBeInTheDocument();
})