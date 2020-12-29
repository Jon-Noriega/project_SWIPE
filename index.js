/**
 * @format
 */

import 'react-native-gesture-handler';
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function Main() {
    return (
        <PaperProvider
            settings={{
                icon: props => <FontAwesomeIcon {...props} />,
            }}
        >
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
