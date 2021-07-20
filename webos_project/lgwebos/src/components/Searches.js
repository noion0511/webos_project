import kind from "@enact/core/kind";
import PropTypes from 'prop-types';

import css from './search.module.less'

const SearchesBase = kind({
    name: 'search',

    propTypes:{
        children: PropTypes.string,
        index: PropTypes.number,
        size: PropTypes.number
    },

    defaultProps:{
        size:300
    },

    styles: {
        css,
        className: 'search'
    },

    computed:{
        url:() =>{
            return "../loupe.png";
        }
    },

    render: ({children, url, ...rest})=> {
        delete rest.index;
        delete rest.size;

        return(
            <div {...rest}>
                <img src = {url} alt='searches'/>
                <div>{children}</div>
            </div>
        );
    }
});

export default SearchesBase;
export {SearchesBase as search};