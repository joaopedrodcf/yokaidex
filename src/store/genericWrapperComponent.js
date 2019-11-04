/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import memoize from 'fast-memoize';

// eslint-disable-next-line func-names
const getProps = function(state, context) {
    return { ...state, ...context };
};

const memoizedGetProps = memoize(getProps);

const genericWrapperComponent = (name, ComponentContext, Element) => {
    function WrapperComponent(props) {
        return (
            <ComponentContext.Consumer>
                {state => (
                    <Element
                        {...props}
                        context={memoizedGetProps(state, props.context)}
                    />
                )}
            </ComponentContext.Consumer>
        );
    }

    WrapperComponent.displayName = name;
    return WrapperComponent;
};

export default genericWrapperComponent;
