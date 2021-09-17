import Button from "./Button";
import Label from "./Label";
import LightLabel from "./LightLabel";
import LightButton from "./LightButton";

export default class View {
    label: Label;
    button: Button;

    constructor() {
        this.label = new LightLabel();
        this.button = new LightButton();
    }
}
