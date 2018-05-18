import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Table, Avatar, Typography, Icon } from '../src';
import Section from './helpers/Section';
import styles from './helpers/styles.css'

const story = storiesOf('Atoms/Table', module)

const cellUser  = (
  <div style={{display:"flex", alignItems:"center"}}>
    <div style={{width:"25px", marginRight:"10px"}}>
      <Avatar />
    </div>
    <div>
      <Typography.Text small>Lenin Velmont</Typography.Text>
    </div>
  </div>
)

const tableDataCustom = {
  columns: [
    {
      field: 'name',
      title: <Typography.Text>Name</Typography.Text>
    },
    {
      field: 'gender',
      title: <Typography.Text>Gender</Typography.Text>
    },
    {
      field: 'country',
      title: <Typography.Text>Country</Typography.Text>
    },
  ],
  rows: [{
    'name': cellUser,
    'gender': <Icon name="FaMale" color="#3BA3F8" size={20}/> ,
    'country': <Typography.Text small>CANADA</Typography.Text>,
  }, {
    'name': cellUser,
    'gender': <Icon name="FaMale" color="#3BA3F8" size={20}/> ,
    'country': <Typography.Text small>CANADA</Typography.Text>,
  }, {
    'name': cellUser,
    'gender': <Icon name="FaMale" color="#3BA3F8" size={20}/> ,
    'country': <Typography.Text small>CANADA</Typography.Text>,
  }, {
    'name': cellUser,
    'gender': <Icon name="FaMale" color="#3BA3F8" size={20}/> ,
    'country': <Typography.Text small>CANADA</Typography.Text>,
  }]
};

const tableData = {
  columns: [
    {
      field: 'name',
      title: 'Name'
    },
    {
      field: 'age',
      title: 'Age'
    },
    {
      field: 'country',
      title: 'Country'
    },
  ],
  rows: [{
    'name': 'Lenin Velmont',
    'age': 50,
    'country': 'CANADA',
  }, {
    'name': 'Lenin Velmont',
    'age': 50,
    'country': 'CANADA',
  }, {
    'name': 'Lenin Velmont',
    'age': 50,
    'country': 'CANADA',
  }, {
    'name': 'Lenin Velmont',
    'age': 50,
    'country': 'CANADA',
  }]
};

story.add('Table Text',
  withInfo()(
    () => (
      <div>
        <Table columns={tableData.columns} rows = {tableData.rows} />
      </div>
    )
  )
);

story.add('Table with Components',
  withInfo()(
    () => (
      <div>
        <Table columns={tableDataCustom.columns} rows = {tableDataCustom.rows} />
      </div>
    )
  )
);

story.add('Table custom styles',
  withInfo()(
    () => (
      <div>
        <Table className={styles.tableCustom} columns={tableDataCustom.columns} rows = {tableDataCustom.rows} />
      </div>
    )
  )
);
