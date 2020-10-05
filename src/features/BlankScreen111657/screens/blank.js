import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class __Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { DateTimePicker_3: new Date("10/05/2020"), Switch_5: true }
  render = () => (
    <View style={styles.View_1}>
      <Text style={styles.Text_2}>Sample text content</Text>
      <DateTimePicker
        showIcon={false}
        style={styles.DateTimePicker_3}
        date={this.state.DateTimePicker_3}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_3: selectedDate })
        }
      />
      <Button
        title="Press me!"
        color="#3366FF"
        style={styles.Button_4}
        onPress={() => alert("Pressed!")}
      />
      <Switch
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_5}
        value={this.state.Switch_5}
        onValueChange={nextChecked => this.setState({ Switch_5: nextChecked })}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        step={1}
        disabled={false}
        maximumTrackTintColor="#E4E7ED"
        minimumTrackTintColor="#3366FF"
        thumbTintColor="#3366FF"
        style={styles.Slider_6}
      />
    </View>
  )
}

_Blank = withStyles(__Blank, theme => ({
  container: { backgroundColor: theme["color-basic-100"] }
}))

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(_Blank)
