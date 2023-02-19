import React from 'react';

const PersonalForm = () => {
    return (
        <div>
            <h1 className="text-denim font-bold text-2">Personal info</h1>
            <span className="text-gray">Please provide your name, email address, and phone number.</span>
            <div>
                <label className="text-denim">Name</label>
                <input type="text" className="text-denim p-4 leading-5 w-full border-light-gray rounded-lg border focus:border-purplier outline-0" placeholder="e.g. Stephen King" />
            </div>
            <div>
                <label className="text-denim">Email Address</label>
                <input type="text" className="text-denim p-4 leading-5 w-full border-light-gray rounded-lg border focus:border-purplier outline-0" placeholder="e.g. stephenking@lorem.com" />
            </div>
            <div>
                <label className="text-denim">Phone Number</label>
                <input type="text" className="text-denim p-4 leading-5 w-full border-light-gray rounded-lg border focus:border-purplier outline-0" placeholder="e.g. +1 234 567 890" />
            </div>

            <button className="bg-denim text-white rounded-lg py-4 px-6">Next Step</button>
        </div>
    );
};

export default PersonalForm;
