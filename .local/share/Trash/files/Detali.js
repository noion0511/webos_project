import kind from '@enact/core/kind';
import { Header } from "@enact/sandstone/Panels";
import PropTypes from 'prop-types';


const genders = {
    m: 'Male',
    f: 'Femele'
};

const DetailBase = kind({
    name: 'Detail',

    propTypes: {
        color: propTypes.string,
        gender: propTypes.string,
        name: propTypes.string,
        weight: propTypes.number
    },

    defaultProps: {
        gender: 'm',
        color: 'Tabby',
        weight: 9
    },

    render: ({color, gender, name, weight, ...rest}) => (
        <Panel {...rest}>
            <Header title={name}>
                <div>Gender: {genders[gender]}</div>
                <div>Color: {color}</div>
                <div>Weight: {weight}</div>
            </Header>
        </Panel>
    )
});

export default DetailsBase;
export {
    DetailsBase as Detail,
    DetailsBase
};