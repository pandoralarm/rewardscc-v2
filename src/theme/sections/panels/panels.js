import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "../../components/heading/heading";
import Container from "../../components/container/container";

export default function Panels() {
    const component = "panels";

    return (
        <div className={component}>
            <Container componentClass={component} size={"small"} spacingBottom={"none"}>
                <Heading componentClass={component} align={"left"} title={"Partnership with Microsoft Azure"} subtitle={"We run on Microsoft Azure and have been working with Microsoft for over 20 years. Because of this we have four-nines availability - 99.99% uptime."} subtitleSize={"small"} />
            </Container>
            <Container componentClass={component} size={"medium"} spacingTop={"none"}>
                <div className={`${component}__content`}>
                    <img className={`${component}__image`} src={useBaseUrl("img/assets/azure-logo.png")} />
                </div>
            </Container>
        </div>
    );
}
