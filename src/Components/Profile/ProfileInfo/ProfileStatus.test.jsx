import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const instance = component.getInstance()
        expect(instance.state.status).toBe('it-kamasutra.com')
    });

    test("after created <span> with status should be displayed ", () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    });

    test("after created <input> with status should be displayed ", () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivatedEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });

});