import React from 'react';
import Navigation from './';
import { shallow } from 'enzyme';
import assert from 'assert';

let component;

const getNavigation = props => (
  <Navigation {...{ handleChangeView: () => {}, money: 0, ...props }} />
);

beforeEach(() => {
  component = shallow(getNavigation());
});

it('renders', () => {
  assert(component.hasClass('Navigation'));
});