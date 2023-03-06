import React from 'react';

const Step = (props) => {
    const { index, title } = props;
    return (
        <div className="flex pb-8 last:pb-0">
            <div className="inline-block">
                <div className=" relative border border-white rounded-full text-white w-[2.06rem] h-[2.06rem] text-center p-1 leading-[1.43rem]">{index}</div>
            </div>
            <div className="inline-block pl-4">
                <div className="text-light-blue text-xs leading-[.875rem]">Step {index}</div>
                <div className="text-white uppercase">{title}</div>
            </div>
        </div>
    );
};

export default Step;
