"use client";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";

import { useBackgroundLinearGradientAnimation } from "@/hooks/color";

import styles from "./SignUpForm.module.css";

type SignUpFormValues = {
    confirmPassword: string;
    email: string;
    password: string;
    username: string;
};

const SIGN_UP_DEFAULT_FORM_VALUES: SignUpFormValues = {
    confirmPassword: "",
    email: "",
    password: "",
    username: "",
};

/**
 *
 * @returns
 */
export const SignUpForm = (): JSX.Element => {
    useBackgroundLinearGradientAnimation();
    const intl = useIntl();

    const { formState, register } = useForm<SignUpFormValues>({
        criteriaMode: "all",
        defaultValues: SIGN_UP_DEFAULT_FORM_VALUES,
        mode: "all",
        reValidateMode: "onBlur",
    });

    const { dirtyFields, isValid, isValidating } = formState;

    return (
        <div
            className={`${styles.sign_up_form_container} ${
                Object.keys(dirtyFields).length > 0 &&
                styles.sign_up_form_container_25
            } ${
                Object.keys(dirtyFields).length > 1 &&
                styles.sign_up_form_container_50
            } ${
                Object.keys(dirtyFields).length > 2 &&
                styles.sign_up_form_container_75
            } ${
                Object.keys(dirtyFields).length > 3 &&
                styles.sign_up_form_container_100
            }`}
        >
            <Form.Control
                className={styles.signup_form}
                {...register("username", { required: true })}
                placeholder={intl.formatMessage({ id: "username" })}
            />
            <Form.Control
                className={styles.signup_form}
                {...register("email", { required: true })}
                placeholder={intl.formatMessage({ id: "email" })}
            />
            <Form.Control
                className={styles.signup_form}
                {...register("password", { required: true })}
                placeholder={intl.formatMessage({ id: "password" })}
                type="password"
            />
            <Form.Control
                className={styles.signup_form}
                {...register("confirmPassword", { required: true })}
                placeholder={intl.formatMessage({ id: "confirmPassword" })}
                type="password"
            />
            <Button
                className={styles.signup_button}
                variant={
                    !isValid || isValidating ? "outline-secondary" : "success"
                }
            >
                <i
                    className={`fa-solid ${
                        !isValid || isValidating ? "fa-circle" : "fa-check"
                    }`}
                />
            </Button>
        </div>
    );
};
