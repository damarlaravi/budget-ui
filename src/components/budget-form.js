import {Fragment} from "react";
import {Checkbox, Form, FormGroup, FormInput, Segment} from "semantic-ui-react";

export default function BudgetForm({desc, value, isExpensive, setDesc, setValue, setIsExpensive}) {
    return (
        <Fragment>
            <Fragment>
                <Form unstackable>
                    <FormGroup>
                        <FormInput
                            icon="tags"
                            width={12}
                            label="Description"
                            value={desc}
                            onChange={(event) => setDesc(event.target.value)}
                            placeholder="new shinny thing"/>
                        <FormInput
                            icon="dollar"
                            width={4}
                            label="Value"
                            iconPosition="left"
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                            placeholder="$100"/>
                    </FormGroup>
                </Form>
                <Segment compact>
                    <Checkbox
                        toggle
                        label="Is Expense"
                        checked={isExpensive}
                        onChange={(event) => setIsExpensive(event.target.value)}/>
                </Segment>
            </Fragment>
        </Fragment>
    )
}
