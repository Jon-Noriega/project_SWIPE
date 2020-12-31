/**
 * @format
 */

import 'react-native-gesture-handler';
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

    const theme = {
        ...DefaultTheme,
        colors: {
        ...DefaultTheme.colors,
        primary: '#0048e8',
        accent: '#e0b402',
        },
    };

export default function Main() {
    return (
        <PaperProvider
            theme={theme}
            settings={{
                icon: props => <FontAwesomeIcon {...props} />,
            }}
        >
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
