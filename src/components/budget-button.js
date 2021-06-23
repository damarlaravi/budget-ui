import {Button, ButtonGroup, ButtonOr} from "semantic-ui-react";

export default function BudgetButton({addEntry}) {
    return (
        <ButtonGroup>
            <Button>Cancel</Button>
            <ButtonOr/>
            <Button primary onClick={() => addEntry()}>Ok</Button>
        </ButtonGroup>
    )
}
