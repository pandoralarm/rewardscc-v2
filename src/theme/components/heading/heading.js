import React from "react";

export default function Heading(props) {
    const component = "shift-heading";

    const { componentClass, title, subtitle, align = "center", titleSize = "default", subtitleSize = "default", style = null } = props;

    return (
        <>
            {title && (
                <div
                    className={`
					${component}
					${component}__${componentClass}
					${component}__align--${align}
				`}
                    style={style}>
                    {title && <div className={`${component}__title ${component}__title-size--${titleSize}`}>{title}</div>}
                    {subtitle && <div className={`${component}__subtitle  ${component}__subtitle-size--${subtitleSize}`} dangerouslySetInnerHTML={{ __html: subtitle }}></div>}
                </div>
            )}
        </>
    );
}
