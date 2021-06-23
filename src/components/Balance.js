import {Statistic} from "semantic-ui-react";

export default function Balance({type, value, color = 'black', size='tiny'}) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign: 'left'}}>{type}</Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    )
}
