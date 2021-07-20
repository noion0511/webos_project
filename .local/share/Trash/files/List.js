import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import Repeater from '@enact/ui/Repeater';
import PropTypes from 'prop-types';

import dog from '../components/Dogs';

const ListBase = kind({
    name: 'List',

    propTypes: {
        children: PropTypes.array
    },

    render: ({children, ...rest}) => (
        <Panel {...rest}>
            <Header title="Dogs!" />
            <Scroller>
                <Repeater childComponent={dog} indexProp="index">
                    {children}
                </Repeater>
            </Scroller>
        </Panel>
    )
})