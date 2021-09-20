import AbstractFactory from "./AbstractFactory";
import Label from "./Label";
import Button from "./Button";
import LightLabel from "./LightLabel";
import LightButton from "./LightButton";

export default class LightThemeFactory implements AbstractFactory {

    createLabel(): Label {
        return new LightLabel();
    }

    createButton(): Button {
        return new LightButton();
    }
}