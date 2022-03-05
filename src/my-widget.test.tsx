import React from "react"
import {screen, render} from "@testing-library/react"

import {MyWidget} from "./my-widget";

describe("MyWidget", () => {
    it("should render the component", () => {
        render(<MyWidget contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
