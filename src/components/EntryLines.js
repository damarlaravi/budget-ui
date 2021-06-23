import EntryLine from "./EntryLine";
import {Container} from "semantic-ui-react";

export default function EntryLines({entryList, deleteEntry, editEntry}) {
    return (
        <Container>
            {entryList.map((entry) => {
                return <EntryLine
                    key={entry.id}
                    entry={entry}
                    deleteItem={deleteEntry}
                    editEntry={editEntry}/>
            })}
        </Container>
    )
}
