import {Grid, GridColumn, GridRow, Icon, Segment} from "semantic-ui-react";
import {Fragment} from "react";

export default function EntryLine({entry, deleteItem, editEntry}) {

    return (
        <Fragment>
            <Segment color={entry.isExpensive ? 'red' : 'green'}>
                <Grid columns={3} divided style={{textAlign: 'right'}}>
                    <GridRow>
                        <GridColumn width={10} style={{textAlign: 'left'}}>{entry.desc}</GridColumn>
                        <GridColumn width={3}>{entry.value}</GridColumn>
                        <GridColumn width={3}>
                            <Icon name="edit" onClick={() => editEntry(entry.id)}/>
                            <Icon name="trash" onClick={() => deleteItem(entry.id)}/>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Segment>

        </Fragment>
    )
}
