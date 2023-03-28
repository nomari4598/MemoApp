import { CSSProperties, FC, memo } from "react";
import { StyleSheet, View, Text, StyleProp, TextStyle } from "react-native";

type HelloProps = {
    bang?: boolean;
    children: string;
    style?: StyleProp<TextStyle>;
};

export const Hello: FC<HelloProps> = ({ bang, children, style }) => {
    return (
        <View>
            <Text style={[styles.text, style]}>
                {`Hello, ${children}${bang ? "!!" : ""}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        backgroundColor: "blue",
        fontSize: 40,
        fontWeight: "bold",
        padding: 16,
    },
});

/** Helloの初期値 */
Hello.defaultProps = {
    bang: false,
    style: styles.text,
};
