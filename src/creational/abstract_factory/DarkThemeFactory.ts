import AbstractFactory from "./AbstractFactory";
import Label from "./Label";
import Button from "./Button";
import DarkLabel from "./DarkLabel";
import DarkButton from "./DarkButton";

export default class DarkThemeFactory implements AbstractFactory {

    createLabel(): Label {
        return new DarkLabel();
    }

    createButton(): Button {
        return new DarkButton();
    }
}