/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { GET_PROFILE } from '../../redux/actions/profile.actions';
import { logout } from '../../redux/actions/auth.actions';

// Imports: Component
import Loader from '../../component/loader';

import avatar from '../../assets/profile.png';

export class profile extends Component {
  constructor(props) {
    super(props);
    const { profile_data } = this.props.profile;
    this.state = {
      fullname: profile_data.fullname,
      phone: profile_data.phone,
      gender: profile_data.gender,
      birthdate: profile_data.birthdate,
    };
  }

  componentDidMount = () => {
    const { userId } = this.props.auth;
    this.props.GET_PROFILE({ id: userId });
  }

  updateProfile = () => {

  }

  render() {
    const { profile_loading } = this.props.profile;
    return (
      <SafeAreaView>
        <Loader isLoading={profile_loading} />
        <ScrollView>
          <View style={styles.center}>
            <Avatar
              rounded
              size={200}
              containerStyle={styles.mb_10}
              source={avatar}
            />
            <Input
              placeholder="Fullname"
              defaultValue={this.state.fullname}
              onChangeText={(e) => this.setState({ fullname: e })}
            />
            <Input
              placeholder="Phone Number"
              defaultValue={this.state.phone}
              onChangeText={(e) => this.setState({ phone: e })}
            />
            <Input
              placeholder="Gender"
              defaultValue={this.state.gender}
              onChangeText={(e) => this.setState({ gender: e })}
            />
            <Input
              placeholder="Birthdate"
              defaultValue={this.state.birthdate}
              onChangeText={(e) => this.setState({ birthdate: e })}
            />
            <Button
              title="Update Profile"
              onPress={() => this.updateProfile()}
              buttonStyle={styles.bgRed}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mb_10: {
    marginBottom: 20,
  },
  center: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  bgRed: {
    backgroundColor: '#f70000',
    marginBottom: 10,
  },
  outlineBtn: {
    color: '#3f3d56',
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    auth: state.authReducer,
    profile: state.profileReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // GET_PROFILE
    GET_PROFILE: (trueFalse) => dispatch(GET_PROFILE(trueFalse)),
    LOGOUT: () => dispatch(logout()),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(profile);