"use client";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

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
    const { formState, register } = useForm<SignUpFormValues>({
        criteriaMode: "all",
        defaultValues: SIGN_UP_DEFAULT_FORM_VALUES,
        mode: "all",
        reValidateMode: "onBlur",
    });

    const { isValid, isValidating } = formState;

    return (
        <div className={styles.sign_up_form_container}>
            <Form.Control
                className={styles.signup_form}
                {...register("username", { required: true })}
                placeholder="Username"
            />
            <Form.Control
                className={styles.signup_form}
                {...register("email", { required: true })}
                placeholder="Email"
            />
            <Form.Control
                className={styles.signup_form}
                {...register("password", { required: true })}
                placeholder="Password"
                type="password"
            />
            <Form.Control
                className={styles.signup_form}
                {...register("confirmPassword", { required: true })}
                placeholder="Confirm Password"
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
