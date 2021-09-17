import View from "./View";

test("Should create a Light Theme Graphic Interface", function() {
    const view = new View();
    expect(view.label.color).toBe("black");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("blue");
});