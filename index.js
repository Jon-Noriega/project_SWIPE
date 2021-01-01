/**
 * @format
 */

import 'react-native-gesture-handler';
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

    const theme = {
        ...DefaultTheme,
        colors: {
        ...DefaultTheme.colors,
        primary: '#e0b402',
        accent: '#0048e8',
        }
    }

export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App/>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
