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
    const { className,
            labelText,
            placeholder,
            options,
            input,
            reduxFormInput } = this.props;
    const value = selectedOption && selectedOption.value;
    const currentIcon = menuOpen ? 'FaCaretUp' : 'FaCaretDown'

    let selectProps = {
      onChange: this.selectOption,
      value,
    };

    if(reduxFormInput) {
      selectProps = { ...input, value };
    }

    return (
      <div className={className}>
        {labelText &&
          <Typography.Text bold>
            {labelText}
          </Typography.Text>
        }
        <Dropdown isOpen={this.menuIsOpen}>
          <DropdownTrigger>
            <InputBox
              rightIconConfig={{color: "black"}}
              rightIcon={currentIcon}
              placeholder={placeholder}
              disabled
              {...selectProps}
            />
          </DropdownTrigger>
          <DropdownContent className={styles.container}>
            {options && options.map((option, i) => {
              return (
                <div key={`option-${i}`} onClick={(e) => {
                  this.selectOption(e, option);
                  if(reduxFormInput && !!input) input.onChange(option.value);
                }}
                className={styles.option}>
                  <Typography.Text small>
                    {option.value}
                  </Typography.Text>
                </div>
              )
            })}
          </DropdownContent>
        </Dropdown>
      </div>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.func
}
