import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import Balance from "./Balance";

export default function Balances({totalIncome, totalExpense}) {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn>
                        <Balance type="Amount" value={totalIncome} color="green"/>
                    </GridColumn>
                    <GridColumn>
                        <Balance type="Expenses" value={totalExpense} color="red"/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
    )
}
