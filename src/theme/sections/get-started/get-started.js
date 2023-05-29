import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "./../../components/heading/heading";
import Container from "./../../components/container/container";
import Arrow from "./../../components/arrow/arrow";

export default function GetStarted() {
    const component = "shift-get-started";

    const itemsData = [
        {
            bg: useBaseUrl("img/ic-theme-bg.svg"),
            icon: useBaseUrl("img/assets/Features-2.1.png"),
            type: "theme",
            label: `I want a new WordPress <span class="${component}__label-highlight">theme</span>`,
            title: "Over 25 API Endpoints",
            subtitle: "Chances are there is an endpoint that will meet your need without requring much change to your application. More endpoints in development.",
            link: useBaseUrl("/docs/theme"),
        },
        {
            bg: useBaseUrl("img/ic-plugin-bg.svg"),
            icon: useBaseUrl("img/assets/Features-2.2.png"),
            type: "plugin",
            label: `I want a new WordPress <span class="${component}__label-highlight">plugin</span>`,
            title: "Custom Endpoints",
            subtitle: "Can't find an endpoint that meets your needs? Let us know and we'll work on a solution that does! Want a card or two added? No problem, we'll get it in there within a day.",
            link: useBaseUrl("/docs/plugin"),
        },
        {
            bg: useBaseUrl("img/ic-plugin-bg.svg"),
            icon: useBaseUrl("img/assets/Features-2.3.png"),
            type: "plugin",
            label: `I want a new WordPress <span class="${component}__label-highlight">plugin</span>`,
            title: "Simple REST API",
            subtitle: "Our API is organized around REST, and allows for very simple integrations with your application. We are constantly improving the API to add more features and data points.",
            link: useBaseUrl("/docs/plugin"),
        },
    ];

    const items = itemsData.map((item, index) => {
        const { bg, icon, type, label, link, title, subtitle, style } = item;

        return (
            <div className={`${component}__item ${component}__item--${type}`} key={index}>
                <a className={`${component}__link`}>
                    <div className={`${component}__icon`}>
                        {/* <img className={`${component}__icon-bg`} src={bg} /> */}
                        <img className={`${component}__icon-img`} src={icon} style={{ marginLeft: "30%" }} />
                    </div>{" "}
                    <Heading componentClass={component} title={title} titleSize={"default"} subtitle={subtitle} style={style} />
                    {/* <div className={`${component}__label`} dangerouslySetInnerHTML={{ __html: label }}></div> */}
                    {/* <Arrow componentClass={component} /> */}
                </a>
            </div>
        );
    });

    return (
        <div className={component}>
            <Container componentClass={component} size={"small"} style={{ padding: "40px" }}>
                <Heading componentClass={component} title={"Unlock the Power of Credit Card Data with our Extensive API Suite"} titleSize={"medium"} subtitleSize={"small"} />
                <div className={`${component}__content`}>{items}</div>
            </Container>
        </div>
    );
}
