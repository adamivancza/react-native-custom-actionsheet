import React, { PureComponent } from 'react'
import { TouchableHighlight, Text } from 'react-native'

class CancelButton extends PureComponent {
  render() {
    const {
      styles,
      onPress,
      options,
      cancelButtonIndex,
      tintColor,
      cancelMargin,
      buttonHeight,
      buttonUnderlayColor,
    } = this.props

    if (cancelButtonIndex === -1 || !options[cancelButtonIndex]) {
      return null
    }

    return (
      <TouchableHighlight
        activeOpacity={1}
        onPress={onPress}
        underlayColor={buttonUnderlayColor}
        style={[
          styles.buttonContainer,
          styles.cancelButton
        ]}
      >
        {
          options[cancelButtonIndex].component
          ? options[cancelButtonIndex].component
          : (
            <Text style={[styles.buttonTitle, styles.cancelTitle]}>
              {options[cancelButtonIndex]}
            </Text>
          )
        }
      </TouchableHighlight>
    )
  }
}

export default CancelButton
