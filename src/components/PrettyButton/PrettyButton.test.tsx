import PrettyButton from '.';
import renderer from 'react-test-renderer';
import React from 'react';

describe('PrettyButton', () => {
    it('should render properly', () => {
        const tree = renderer
            .create(<PrettyButton text="test" clickHandler={() => {}} />)
            .toJSON();
        expect(tree).toMatchInlineSnapshot(`
      <button
        className="btnPretty"
        onClick={[Function]}
        type="button"
      >
        test
      </button>
    `);
    });
});
