
import { useState, useEffect } from "react";

import Form from "../Form/Form";
import FlexBox from "../Layout/Flexbox";
import FlexItem from "../Layout/FlexItem/FLexItem";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Lead from "../Lead/Lead";
import Description from "../Description/Description";
import Select from "../Select/Select";

const UserInfo = ({ initialValues, handleNextButton, handleInputChange, UserInfo }) => {
    console.log('@@ formValues from UserInfo', UserInfo)

    return (
        <>
            <Lead text="Contact information" classes="mb-8" />
            <Description classes="mb-16" content="We’ll use these details to keep you informed on your delivery." />

            <FlexBox classes="d-flex--minus-margin">
                <FlexItem size="6">
                    <Input
                        id="email"
                        labelText="Email"
                        type="text"
                        placeholder="abc@xyz.com"
                        name="email"
                        classes="form__control"
                        direction="column"
                        onChange={handleInputChange}
                        value={initialValues.email}
                    />
                </FlexItem>
                <FlexItem size="6">
                    <Input
                        id="phone"
                        labelText="phone number"
                        type="text"
                        placeholder="(222) 222-2222"
                        name="phone" classes="form__control"
                        direction="column"
                        onChange={handleInputChange}
                        value={initialValues.phone}
                    />
                </FlexItem>
            </FlexBox>

            <legend><Lead text="1. shipping information" /></legend>

            <FlexBox classes="d-flex--minus-margin">
                <FlexItem size="6">
                    <Select labelText="country" id="country" placeholder="United States" direction="column" />
                </FlexItem>
            </FlexBox>

            <FlexBox classes="d-flex--minus-margin">
                <FlexItem size="6">
                    <Input
                        id="first_name"
                        labelText="first name"
                        type="text"
                        name="firstName"
                        classes="form__control"
                        direction="column"
                        onChange={handleInputChange}
                        value={initialValues.firstName}

                    />
                </FlexItem>

                <FlexItem size="6">
                    <Input
                        id="last_name"
                        labelText="last name"
                        type="text"
                        name="lastName"
                        classes="form__control"
                        direction="column"
                        onChange={handleInputChange}
                        value={initialValues.lastName} />
                </FlexItem>

                <FlexItem size="6">
                    <Input
                        id="street_address"
                        labelText="street address"
                        type="text"
                        name="streetAddress1"
                        classes="form__control"
                        direction="column"
                        onChange={handleInputChange}
                        value={initialValues.streetAddress1} />
                </FlexItem>

                <FlexItem size="6">
                    <Input
                        id="street_address2"
                        labelText="street address 2"
                        type="text"
                        name="streetAddress2"
                        classes="form__control"
                        direction="column"
                        onChange={handleInputChange}
                        value={initialValues.streetAddress2} />
                </FlexItem>

                <FlexItem size="6">
                    <Input
                        id="city"
                        labelText="city"
                        type="text"
                        name="city"
                        classes="form__control"
                        direction="column"
                        onChange={handleInputChange}
                        value={initialValues.city} />
                </FlexItem>

                <FlexItem size="6">
                    <FlexBox classes="d-flex--minus-margin ">
                        <FlexItem size="9">
                            <Input
                                id="state"
                                labelText="state"
                                type="text"
                                name="state"
                                classes="form__control"
                                direction="column"

                                onChange={handleInputChange}
                                value={initialValues.state} />
                        </FlexItem>

                        <FlexItem size="3">
                            <Input
                                id="zip"
                                labelText="zip"
                                type="text"
                                name="zip"
                                classes="form__control"
                                direction="column"
                                onChange={handleInputChange}
                                value={initialValues.zip} />
                        </FlexItem>
                    </FlexBox>
                </FlexItem>
            </FlexBox>

            <FlexBox classes="d-flex__justify-center d-flex--minus-margin mt-50 mb-25">
                <FlexItem>
                    <Button text="continue to shipping method" type="outline" variant="primary" isBlock="true" onPress={handleNextButton} />
                </FlexItem>
            </FlexBox>
        </>
    );
}

export default UserInfo;