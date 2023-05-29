import React from "react";
import Heading from "./../../components/heading/heading";
import Container from "./../../components/container/container";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Features() {
    const component = "shift-features";

    const bg = {
        wl: useBaseUrl("img/assets/feat-3/wing-left.png"),
        wr: useBaseUrl("img/assets/feat-3/wing-right.png"),
        grid: useBaseUrl("img/assets/feat-3/grid.png"),
    };

    const data = [
        {
            // icon: "red",
            icon: useBaseUrl("img/assets/Card-1.png"),
            title: "Complete list of credit card spend categories",
            desc: "Want to know which cards offer 3% on dining? Are there any limits or caveats? We have the most complete dataset of credit card spend bonus category information.",
        },
        {
            // icon: "purple",
            icon: useBaseUrl("img/assets/Card-2.png"),
            title: "One dataset to rule them all",
            desc: "The most detailed and comprehensive collection of credit card metadata commercially available. We cover 99.5% of the credit card market in the United States.",
        },
        {
            // icon: "yellow",
            icon: useBaseUrl("img/assets/Card-3.png"),
            title: "Individual card details",
            desc: "Our card detail endpoint provides everything you want to know about a card - from obscure credits to sign-up bonus to annual spend bonuses to individual card url's.",
        },
        {
            // icon: "red",
            title: "Card image",
            icon: useBaseUrl("img/assets/Card-4.png"),
            desc: "We have images for over 95% of the cards. We also host the images on our servers so there's no need to be concerned about bad links.",
        },

        {
            // icon: "green",
            title: "Bank and Credit Union Data",
            icon: useBaseUrl("img/assets/Card-5.png"),
            desc: "In addition to credit card data we offer bank data pulled direct from the FDIC and credit union data sourced from the NCUA.",
        },
    ];

    const items = data.map((item, index) => {
        const { icon, title, desc } = item;

        return (
            <div className={`${component}__item`} key={index}>
                {" "}
                <div className={`${component}__icon`}>
                    <img className={`${component}__icon-img`} src={icon} style={{ marginLeft: "5%", width: "15%" }} />
                </div>{" "}
                <div className={`${component}__title ${component}__title--${icon}`}>{title}</div>
                <div className={`${component}__desc`}>{desc}</div>
            </div>
        );
    });

    return (
        <div className={component}>
            <Container componentClass={component} size={"medium"}>
                <div className="title-container">
                    <img src={bg.wl} style={{ position: "absolute", transform: "scale(0.8) translate(0, -30%)" }} />

                    <Heading componentClass={component} title={"Your Gateway to Comprehensive Credit Card Information"} titleSize={"medium"} align={"center"} />

                    <img src={bg.wr} style={{ position: "relative", transform: "scale(0.8) translate(0, -30%)" }} />
                </div>

                <div className={`${component}__content`}>{items}</div>
            </Container>
        </div>
    );
}
