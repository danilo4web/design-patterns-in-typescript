import Button from "./Button";
import Label from "./Label";
import LightLabel from "./LightLabel";
import LightButton from "./LightButton";
import AbstractFactory from "./AbstractFactory";

export default class View {
    label: Label;
    button: Button;

    constructor(themeFactory: AbstractFactory) {
        this.label = themeFactory.createLabel();
        this.button = themeFactory.createButton();
    }
}
