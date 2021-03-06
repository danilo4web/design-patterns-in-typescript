import View from "./View";
import LightThemeFactory from "./LightThemeFactory";
import DarkThemeFactory from "./DarkThemeFactory";

test("Should create a Light Theme Graphic Interface", function() {
    const view = new View(new LightThemeFactory());
    expect(view.label.color).toBe("black");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("blue");
});

test("Should create a Dark Theme Graphic Interface", function() {
    const view = new View(new DarkThemeFactory());
    expect(view.label.color).toBe("white");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("black");
});
