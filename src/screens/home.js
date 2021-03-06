/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Header, Text, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class home extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header
            placement="left"
            leftComponent={
              <Icon solid name="user" size={20} />
            }
            centerComponent={{ text: 'Profile name', style: { color: '#3f3d56' } }}
            rightComponent={
              <Icon solid name="heart" size={20} />
            }
            backgroundColor="#fff"
            bottomDivider
          />
          {/* Head 1 */}
          <View style={styles.head1}>
            <View style={styles.childHead1}>
              <Text h4 style={styles.fontWhite}>Rp 0</Text>
              <Text style={styles.fontWhite}>Bonus Balance 0</Text>
            </View>
            <View style={styles.childHead2}>
              <View style={styles.headIcon}>
                <Icon solid name="money-check-alt" size={25} color="#fff" />
                <Text style={styles.fontWhite}>Top Up</Text>
              </View>
              <View style={styles.headIcon}>
                <Icon solid name="money-bill-wave-alt" size={25} color="#fff" />
                <Text style={styles.fontWhite}>Transfer</Text>
              </View>
              <View style={styles.headIcon}>
                <Icon solid name="ticket-alt" size={25} color="#fff" />
                <Text style={styles.fontWhite}>Ticket</Text>
              </View>
              <View style={styles.headIcon}>
                <Icon solid name="wallet" size={25} color="#fff" />
                <Text style={styles.fontWhite}>Wallet</Text>
              </View>
            </View>
          </View>
          {/* Head 2 */}
          <View style={styles.head2}>
            <Text h4>Feature</Text>
            <View style={styles.childHead2}>
              <View style={styles.headIcon}>
                <Icon solid name="mobile-alt" size={25} color="#f70000" />
                <Text style={styles.fontDark}>Pulsa/Data</Text>
              </View>
              <View style={styles.headIcon}>
                <Icon solid name="bolt" size={25} color="#f70000" />
                <Text style={styles.fontDark}>Electricity</Text>
              </View>
              <View style={styles.headIcon}>
                <Icon solid name="gamepad" size={25} color="#f70000" />
                <Text style={styles.fontDark}>Games</Text>
              </View>
              <View style={styles.headIcon}>
                <Icon solid name="mobile" size={25} color="#f70000" />
                <Text style={styles.fontDark}>Pascabayar</Text>
              </View>
            </View>
            <View style={styles.childHead2}>
              <View style={styles.headIcon}>
                <Icon solid name="money-bill-alt" size={25} color="#f70000" />
                <Text style={styles.fontDark}>E-Money</Text>
              </View>
              <View style={styles.headIcon}>
                <Icon solid name="bus" size={25} color="#f70000" />
                <Text style={styles.fontDark}>Transport</Text>
              </View>
              <View style={styles.headIcon}>
                <Icon solid name="people-carry" size={25} color="#f70000" />
                <Text style={styles.fontDark}>Berbagi</Text>
              </View>
              <View style={styles.headIcon}>
                <Icon solid name="buromobelexperte" size={25} color="#f70000" />
                <Text style={styles.fontDark}>More</Text>
              </View>
            </View>
          </View>
          {/* Head 3 */}
          <View style={styles.head3}>
            <Text h4 style={styles.pl_20}>Promo</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Card
                containerStyle={styles.promo}
                imageStyle={styles.coverPromo}
                image={require('../assets/banner/1.jpg')}
              />
              <Card
                containerStyle={styles.promo}
                imageStyle={styles.coverPromo}
                image={require('../assets/banner/2.jpg')}
              />
              <Card
                containerStyle={styles.promo}
                imageStyle={styles.coverPromo}
                image={require('../assets/banner/3.jpg')}
              />
              <Card
                containerStyle={styles.promo}
                imageStyle={styles.coverPromo}
                image={require('../assets/banner/4.jpg')}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mt_10: {
    marginTop: 10,
  },
  mb_17: {
    marginBottom: 17,
  },
  pl_20: {
    paddingLeft: 20,
  },
  head1: {
    height: 150,
    backgroundColor: '#f70000',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  childHead1: {
    flex: 1,
  },
  childHead2: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  head2: {
    height: 200,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  head3: {
    height: 200,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  headIcon: {
    flex: 1,
    alignItems: 'center',
  },
  fontListWhite: {
    color: '#fff',
  },
  fontWhite: {
    color: '#fff',
    fontSize: 11,
  },
  fontDark: {
    color: '#3f3d56',
    fontSize: 11,
  },
  promo: {
    width: 250,
    height: 130,
    borderRadius: 10,
  },
  coverPromo: {
    height: 130,
    maxHeight: 130,
    minHeight: 130,
    borderRadius: 10,
  },
});
