import { Platform, ToastAndroid } from "react-native";

/**
 * Shows a ToastAndroid message, removing the need for `if (Platform.OS === "android")` boilerplate or always passing the `ToastAndroid.LONG` 2nd argument.
 *
 * @export
 * @param {string} text Just pass the text you want to show :)
 */
export function ShowToast(_text: any): void {
    const text =
        typeof _text == "function"
            ? _text.toString()
            : Array.isArray(_text)
              ? _text.join(", ")
              : typeof _text == "object"
                ? JSON.stringify(_text)
                : String(_text);
    if (Platform.OS === "android") {
        ToastAndroid.show(String(text), ToastAndroid.LONG);
    }
}
