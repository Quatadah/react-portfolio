const classMapper = {
    import: "pc fw-bold",
    from: "pc fw-bold",
    const: "pc fw-bold",
    "{": "pc fw-bold",
    "}": "pc fw-bold",
    "(": "pc fw-bold",
    ")": "pc fw-bold",
    "()": "pc fw-bold",
    ")},": "pc fw-bold",
    ",": "pc",
    "{(": "pc fw-bold",
    ")}": "pc fw-bold",
    githubLink: "pc fw-bold",
    linkedinLink: "pc fw-bold",
    twitterLink: "pc fw-bold",
    instagramLink: "pc fw-bold",
    gmailLink: "pc fw-bold",
    "/>": "sc fw-bold",
    "<p>": "sc fw-bold fs-4",
    "</p>": "sc fw-bold fs-4",
    "<AboutMe": "sc fs-4",
    "<Skills": "sc fs-4",
    "<Projects": "sc fs-4",
    "<Contact": "sc fs-4",
    "<h1>": "sc fw-bold",
    "</h1>": "sc fw-bold",
    AboutMe: "sc",
    Skills: "sc",
    Projects: "sc",
    Resume: "sc",
    Quatadah: "sc",
    Portfolio: "sc",
    '"Nasdami"': "tc",
    '"Portfolio"': "tc",
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
