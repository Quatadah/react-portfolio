const classMapper = {
    import: "pc fw-bold",
    from: "pc fw-bold",
    const: "pc fw-bold",
    "{": "pc fw-bold",
    "}": "pc fw-bold",
    "(": "pc fw-bold",
    ")": "pc fw-bold",
    "()": "pc fw-bold",
    ",": "pc",
    "{(": "pc fw-bold",
    ")}": "pc fw-bold",
    "/>": "sc fw-bold",
    "<p>": "sc fw-bold fs-4",
    "</p>": "sc fw-bold fs-4",
    "<AboutMe": "sc",
    "<Skills": "sc",
    AboutMe: "sc",
    Skills: "sc",
    Projects: "sc",
    Resume: "sc",
    Quatadah: "sc",
    Portfolio: "sc",
    '"Nasdami"': "tc",
    '"Life"': "tc",
    return: "tc fw-bold",
};

export const renderWithColors = (text) => {
    return text.split(" ").map((word, index) => {
        return (
            <span key={index} className={classMapper[word]}>
                {word}
                &nbsp;
            </span>
        );
    });
};

export const renderWithColorsComma = (text) => {
    return text.split(" ").map((word, index) => {
        const realWord =
            word.substring(word.length - 1) === ","
                ? word.substring(0, word.length - 1)
                : word;
        return (
            <span key={index} className={classMapper[realWord]}>
                {word}
                &nbsp;
            </span>
        );
    });
};
