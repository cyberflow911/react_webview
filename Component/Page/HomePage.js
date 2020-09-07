import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import {WebView} from 'react-native-webview';

class HomePage extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name="ios-menu" onPress={() => this.props.navigation.openDrawer()} />}
                />
                <WebView
        source={{uri: 'https://weazy.in/user/login'}}
        style={{marginTop: 0}}
      />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomePage;
