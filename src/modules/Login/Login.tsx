import React from "react";

import { CssgFormatMessage } from "@/lib/react-intl";

import styles from "./Login.module.css";
import { LoginForm } from "./LoginForm";

/**
 *
 * @returns
 */
const Login = (): JSX.Element => (
    <div className={styles.login_page_container}>
        <div className={styles.login_page_header}>
            <CssgFormatMessage id="loginHeader" />
        </div>
        <LoginForm />
    </div>
);

export default Login;
