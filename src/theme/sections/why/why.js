import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "./../../components/heading/heading";
import Container from "./../../components/container/container";

export default function Why() {
    const component = "shift-why";

    return (
        <div className={component}>
            <Container componentClass={component} size={"small"} spacingBottom={"none"}>
                <Heading componentClass={component} title={"Updates daily"} subtitle={"The credit card space is constantly evolving and changing - our processes catch these updates daily and refresh your data."} align={"left"} titleSize={"medium"} />
            </Container>
            <Container componentClass={component} size={"medium"} spacingTop={"none"}>
                <div className={`${component}__content`}>
                    <img className={`${component}__image ${component}__image--desktop`} src={useBaseUrl("img/assets/feature-1.png")} />
                    <img className={`${component}__image ${component}__image--mobile`} src={useBaseUrl("img/assets/feature-1-vertical.png")} />
                </div>
            </Container>
        </div>
    );
}
