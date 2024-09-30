import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

function checkLang() {
    if (navigator.language === "es-ES") {
        return (localeEsMessages)
    } else {
        return (localeEnMessages)
    }
}

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages= {checkLang()}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);
