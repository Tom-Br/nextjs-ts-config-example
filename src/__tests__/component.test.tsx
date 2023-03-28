import {describe, it} from "@jest/globals"
import {render, screen} from "@testing-library/react";
import Home from "@/pages";

describe('', () => {
    it('', () => {

        render(<Home/>)

        expect(screen.getByText("Get started by editing")).toBeVisible()

    });
})