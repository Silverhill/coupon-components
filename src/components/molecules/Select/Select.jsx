import React, { Component } from 'react';
import Typography from 'Atoms/Typography';
import InputBox from 'Atoms/InputBox';
import Dropdown from 'Atoms/Dropdown';
import DropdownTrigger from 'Atoms/Dropdown/DropdownTrigger';
import DropdownContent from 'Atoms/Dropdown/DropdownContent';
import styles from './Select.css';
import PropTypes from 'prop-types';

export default class Select extends Component {
  state = {
    selectedOption: null,
    menuOpen: false
  }

  exposeCurrentState = (option) => {
    const { selectedOption } = this.props;
    if(selectedOption) selectedOption(option);
  }

  menuIsOpen = (isOpen) => {
    this.setState({ menuOpen: isOpen });
  }

  selectOption = (e, option) => {
    this.setState({ selectedOption: option });
    this.exposeCurrentState(option);
  }

  render () {
    const { selectedOption, menuOpen } = this.state;
    const { placeholder, options} = this.props;
    const value = selectedOption && selectedOption.value;
    const currentIcon = menuOpen ? 'FaChevronDown' : 'FaChevronUp'

    return (
      <Dropdown isOpen={this.menuIsOpen}>
        <DropdownTrigger>
          <InputBox
            rightIconConfig={{color: "black"}}
            rightIcon={currentIcon}
            placeholder={placeholder}
            value={value}
            disabled="disabled"
          />
        </DropdownTrigger>
        <DropdownContent className={styles.container}>
          {options && options.map((option, i) => {
            return (
              <div key={`option-${i}`} onClick={(e) => this.selectOption(e, option)} className={styles.option}>
                <Typography.Text small>
                  {option.value}
                </Typography.Text>
              </div>
            )
          })}
        </DropdownContent>
      </Dropdown>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.func
}
