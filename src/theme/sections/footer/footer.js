import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "./../../components/heading/heading";
import Container from "./../../components/container/container";
import Arrow from "./../../components/arrow/arrow";

export default function Footer() {
    const component = "shift-footer";

    return (
        <div className={component}>
            <Container componentClass={component}>
                <Heading
                    componentClass={component}
                    align={"left"}
                    title={"Ready to explore our Credit Card API? 🔭"}
                    subtitle={"Find out that our sign-up bonus endpoints give you the ability to search through bank's offerings for airline miles, hotel point, and cash bonuses."}
                    subtitleSize="small"
                />{" "}
                <a href="https://infinum.com/" target="_blank" rel="noopener noreferrer" rel="nofollow" className={`${component}__button`}>
                    <div>Explore Now!</div>
                </a>
            </Container>
            <Container componentClass={`${component}__foot`} spacingBottom={"small"} spacingTop={"none"}>
                <div className={`${component}__foot__columns-foot`}>
                    <div className={`${component}__foot__column-foot ${component}__foot__column--left-foot`}>
                        Made with &hearts; by &nbsp; Rewardscc
                        {" team | "}
                        <a href={useBaseUrl("/sitemap.xml")} target="_blank" rel="noopener noreferrer" className={`${component}__link`}>
                            {"Sitemap"}
                        </a>
                    </div>
                    <div className={`${component}__foot__column-foot ${component}__foot__column--right-foot`}>
                        <span className={`${component}__copy`}>{"© Eightshift. All rights reserved."}</span>
                        <span className={`${component}__logo-wrap`}>
                            {"Part of "}
                            <a href="https://infinum.com/" target="_blank" rel="noopener noreferrer" rel="nofollow" className={`${component}__logo`}>
                                <img src={useBaseUrl("img/ic-infinum-logo.svg")} />
                            </a>
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
}
