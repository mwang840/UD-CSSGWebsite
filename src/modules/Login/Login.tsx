import React from "react";

import styles from "./Login.module.css";
import { LoginForm } from "./LoginForm";

/**
 *
 * @returns
 */
const Login = (): JSX.Element => (
    <div className={styles.login_page_container}>
        <div className={styles.login_page_header}>{"Login to CS+SG"}</div>
        <LoginForm />
    </div>
);

export default Login;
