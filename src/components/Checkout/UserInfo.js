import Form from "../Form/Form";
import FlexBox from "../Layout/Flexbox";
import FlexItem from "../Layout/FlexItem/FLexItem";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Lead from "../Lead/Lead";
import Description from "../Description/Description";
import Select from "../Select/Select";

const UserInfo = ({ handleFormSteps, formData, setFormData }) => {
    console.log('@@ formData', formData);
    return (
        <>
            <Lead text="Contact information" classes="mb-8" />
            <Description classes="mb-16" content="We’ll use these details to keep you informed on your delivery." />

            <FlexBox classes="d-flex--no-gap">
                <FlexItem size="6">
                    <Input
                        id="email"
                        labelText="Email"
                        type="text"
                        placeholder="abc@xyz.com"
                        name="email"
                        classes="form__control"
                        direction="column"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            });
                        }}
                        value={formData.email}
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
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            });
                        }}
                        value={formData.phone}
                    />
                </FlexItem>
            </FlexBox>

            <legend><Lead text="1. shipping information" /></legend>

            <FlexBox classes="d-flex--no-gap">
                <FlexItem size="6">
                    <Select labelText="country" id="country" placeholder="United States" direction="column" />
                </FlexItem>
            </FlexBox>

            <FlexBox classes="d-flex--no-gap">
                <FlexItem size="6">
                    <Input
                        id="first_name"
                        labelText="first name"
                        type="text"
                        name="first_name"
                        classes="form__control"
                        direction="column"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                firstName: e.target.value,
                            });
                        }}
                        value={formData.firstName}

                    />
                </FlexItem>

                <FlexItem size="6">
                    <Input
                        id="last_name"
                        labelText="last name"
                        type="text"
                        name="last_name"
                        classes="form__control"
                        direction="column"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                lastName: e.target.value,
                            });
                        }}
                        value={formData.lastName} />
                </FlexItem>

                <FlexItem size="6">
                    <Input
                        id="street_address"
                        labelText="street address"
                        type="text"
                        name="street_address"
                        classes="form__control"
                        direction="column"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                streetAddress1: e.target.value,
                            });
                        }}
                        value={formData.streetAddress1} />
                </FlexItem>

                <FlexItem size="6">
                    <Input
                        id="street_address2"
                        labelText="street address 2"
                        type="text"
                        name="street_address2"
                        classes="form__control"
                        direction="column"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                streetAddress2: e.target.value,
                            });
                        }}
                        value={formData.streetAddress2} />
                </FlexItem>

                <FlexItem size="6">
                    <Input
                        id="city"
                        labelText="city"
                        type="text"
                        name="city"
                        classes="form__control"
                        direction="column"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                city: e.target.value,
                            });
                        }}
                        value={formData.city} />
                </FlexItem>

                <FlexItem size="6">
                    <FlexBox classes="d-flex--no-gap">
                        <FlexItem size="9">
                            <Input
                                id="state"
                                labelText="state"
                                type="text"
                                name="state"
                                classes="form__control"
                                direction="column"

                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        state: e.target.value,
                                    });
                                }}
                                value={formData.state} />
                        </FlexItem>

                        <FlexItem size="3">
                            <Input
                                id="zip"
                                labelText="zip"
                                type="text" name="zip"
                                classes="form__control"
                                direction="column"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        zip: e.target.value,
                                    });
                                }}
                                value={formData.zip} />
                        </FlexItem>
                    </FlexBox>
                </FlexItem>
            </FlexBox>

            <FlexBox classes="d-flex__justify-center mt-50 mb-25">
                <FlexItem>
                    <Button text="continue to shipping method" type="outline" variant="primary" isBlock="true" onPress={handleFormSteps} />
                </FlexItem>
            </FlexBox>
        </>
    );
}

export default UserInfo;