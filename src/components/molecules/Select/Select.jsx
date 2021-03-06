import React, { Component } from 'react';
import Typography from 'Atoms/Typography';
import InputBox from 'Atoms/InputBox';
import Dropdown from 'Atoms/Dropdown';
import DropdownTrigger from 'Atoms/Dropdown/DropdownTrigger';
import DropdownContent from 'Atoms/Dropdown/DropdownContent';
import styles from './Select.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default class Select extends Component {
  state = {
    currentOption: null,
    menuOpen: false
  }

  componentWillMount() {
    const { currentOption } = this.props;
    this.setState({ currentOption });
  }

  menuIsOpen = (isOpen) => {
    this.setState({ menuOpen: isOpen });
  }

  selectOption = (e, option) => {
    let { reduxFormInput, selectedOption } = this.props;

    //callback of the parent Component
    if(selectedOption && !reduxFormInput ) selectedOption(option);

    //callback of reduxForm
    if (reduxFormInput && !selectedOption ){
      let {input:{onChange, onBlur}} = this.props;
      onChange(option);
      onBlur(option);
    }
    this.setState({ currentOption: option });
  }

  render () {
    const { currentOption, menuOpen } = this.state;
    const { className,
            labelText,
            placeholder,
            options } = this.props;
    const value = currentOption && currentOption.value;
    const currentIcon = menuOpen ? 'FaCaretUp' : 'FaCaretDown'

    let inputProps = { onChange: this.selectOption, onBlur: this.selectOption, value };

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
              {...inputProps}
            />
          </DropdownTrigger>
          <DropdownContent className={styles.container}>
            {options && options.map((option, i) => {
              let classNames = (currentOption && (currentOption.value === option.value))?
                cx(styles.itemSelected, styles.option) : cx(styles.option);
              return (
                <div key={`option-${i}`} className={classNames} onClick={(e) => this.selectOption(e, option)}>
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
  selectedOption: PropTypes.func,
  currentOption: PropTypes.object
}
