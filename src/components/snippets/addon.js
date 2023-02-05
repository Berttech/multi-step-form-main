import React from 'react';

const Addon = (props) => {
    const { title, description, cost }  = props;
    return (
        <div>
            {title}
            {description}
            +${cost}/mo
        </div>
    );
};

export default Addon;
