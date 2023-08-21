"use client";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";

import { useBackgroundLinearGradientAnimation } from "@/hooks/color";

import styles from "./LoginForm.module.css";

type LoginFormValues = {
    username: string;
    password: string;
};

const LOGIN_DEFAULT_VALUES: LoginFormValues = {
    password: "",
    username: "",
};

/**
 *
 * @returns
 */
export const LoginForm = (): JSX.Element => {
    useBackgroundLinearGradientAnimation();
    const intl = useIntl();

    const { formState, register } = useForm<LoginFormValues>({
        criteriaMode: "all",
        defaultValues: LOGIN_DEFAULT_VALUES,
        mode: "all",
        reValidateMode: "onBlur",
    });

    const { dirtyFields } = formState;

    return (
        <div className={styles.login_form_container}>
            <Form.Control
                autoComplete="off"
                className={styles.login_form}
                {...register("username")}
                placeholder={intl.formatMessage({ id: "username" })}
            />
            <Form.Control
                autoComplete="off"
                className={styles.login_form}
                {...register("password")}
                placeholder={intl.formatMessage({ id: "password" })}
                type="password"
            />
            <Button
                className={styles.login_button}
                disabled={Object.keys(dirtyFields).length !== 2}
                variant={
                    Object.keys(dirtyFields).length === 2
                        ? "success"
                        : "secondary"
                }
            >
                <i
                    className={`fa-solid ${
                        Object.keys(dirtyFields).length === 2
                            ? "fa-check"
                            : "fa-circle"
                    }`}
                />
            </Button>
        </div>
    );
};
