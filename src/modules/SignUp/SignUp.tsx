import React from "react";

import styles from "./SignUp.module.css";
import { SignUpForm } from "./SignUpForm/SignUpForm";

/**
 *
 * @returns
 */
const SignUp = (): JSX.Element => (
    <div className={styles.sign_up_container}>
        <div className={styles.sign_up_header}>{"Sign Up"}</div>
        <SignUpForm />
    </div>
);

export default SignUp;
