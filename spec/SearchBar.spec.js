/* global describe, it expect*/
import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../src/components/SearchBar';

describe('CheckboxWithLabel changes the text after click', () => {
  it('should render a label', () => {
    console.log('in test');
    const component = renderer.create(
      <SearchBar />
  );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
