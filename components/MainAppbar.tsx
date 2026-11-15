import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from '@react-navigation/elements';


const MainAppbar = ({ navigation, route, options, back }: NativeStackHeaderProps) => {
    const title = getHeaderTitle(options, route.name)

    return (
        <Appbar.Header mode="center-aligned" elevated={true}>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} />
            {!back ? (
                <Appbar.Action
                    icon="arrow-right"
                    onPress={() => navigation.navigate('SecondScreen')}
                />
            ) : null}
        </Appbar.Header>
    )
}

export default MainAppbar