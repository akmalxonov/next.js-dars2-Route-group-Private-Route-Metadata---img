import React from 'react';
const ContactLayout = ({children}:Readonly<{children:React.ReactNode}>) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default ContactLayout;
