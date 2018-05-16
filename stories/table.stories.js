import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Table } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Atoms/Table', module)

const tableData = {
  columns: ['Name', 'Age', 'Country'],
  rows: [{
    'Name': 'Valery Assitance',
    'Age': 50,
    'Country': 'CANADA',
  }, {
    'Name': 'Velmont Assitance',
    'Age': 50,
    'Country': 'CANADA',
  }, {
    'Name': 'Valencia Assitance',
    'Age': 50,
    'Country': 'CANADA',
  }, {
    'Name': 'Vamcap Assitance',
    'Age': 50,
    'Country': 'CANADA',
  }]
};

story.add('Simple Table',
  withInfo()(
    () => (
      <div>
        <Table columns={tableData.columns} rows = {tableData.rows} />
      </div>
    )
  )
);
