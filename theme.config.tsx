import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: <span style={{ fontWeight: "bold" }}>DevDocs</span>,
    project: {
        link: "https://github.com/shyamayadav154/dev-doc-nextra",
    },
    // chat: {
    //   link: "https://app.slack.com/client/T03AEL3M55J/C03AV8U5RUH",
    //   icon: <SlackIcon />,
    // },
    docsRepositoryBase: "https://github.com/shyamayadav154/dev-doc-nextra",
    footer: {
        text: "DevDocs ",
    },
};

export default config;

function SlackIcon(props: any) {
    return (
        <svg
            height="28px"
            viewBox="0 0 512 512"
            width="28px"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M122.643 316.682c0 26.596-21.727 48.323-48.321 48.323-26.593 0-48.319-21.728-48.319-48.323 0-26.592 21.727-48.318 48.319-48.318h48.321v48.318zM146.996 316.682c0-26.592 21.728-48.318 48.321-48.318 26.593 0 48.32 21.727 48.32 48.318V437.68c0 26.592-21.728 48.319-48.32 48.319-26.594 0-48.321-21.728-48.321-48.319V316.682z"
                fill="#e01e5a"
            />
            <path
                d="M195.317 122.643c-26.594 0-48.321-21.728-48.321-48.321 0-26.593 21.728-48.32 48.321-48.32 26.593 0 48.32 21.728 48.32 48.32v48.321h-48.32zM195.317 146.997c26.593 0 48.32 21.727 48.32 48.321 0 26.593-21.728 48.318-48.32 48.318H74.321c-26.593 0-48.319-21.726-48.319-48.318 0-26.595 21.727-48.321 48.319-48.321h120.996z"
                fill="#36c5f0"
            />
            <path
                d="M389.359 195.318c0-26.595 21.725-48.321 48.32-48.321 26.593 0 48.318 21.727 48.318 48.321 0 26.593-21.726 48.318-48.318 48.318h-48.32v-48.318zM365.004 195.318c0 26.593-21.728 48.318-48.321 48.318-26.593 0-48.32-21.726-48.32-48.318V74.321c0-26.593 21.728-48.32 48.32-48.32 26.594 0 48.321 21.728 48.321 48.32v120.997z"
                fill="#2eb67d"
            />
            <path
                d="M316.683 389.358c26.594 0 48.321 21.727 48.321 48.321 0 26.592-21.728 48.319-48.321 48.319-26.593 0-48.32-21.728-48.32-48.319v-48.321h48.32zM316.683 365.005c-26.593 0-48.32-21.728-48.32-48.323 0-26.592 21.728-48.318 48.32-48.318H437.68c26.593 0 48.318 21.727 48.318 48.318 0 26.596-21.726 48.323-48.318 48.323H316.683z"
                fill="#ecb22e"
            />
        </svg>
    );
}
