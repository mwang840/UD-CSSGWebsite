"use client";
import React from "react";
import { IntlProvider } from "react-intl";

import { messages } from "@/i18n/messages";

/**
 *
 * @param param0
 * @returns
 */
export const CSSGIntlProvider = ({
    children,
}: React.PropsWithChildren): JSX.Element => {
    const [language, setLanguage] = React.useState<string>();

    React.useEffect(() => {
        if (navigator !== undefined) {
            setLanguage(navigator.language);
        }
    }, []);

    if (language === undefined) {
        return <div>{children}</div>;
    }

    return (
        <IntlProvider
            defaultLocale="en-US"
            locale={language}
            messages={messages[language]}
        >
            {children}
        </IntlProvider>
    );
};
