import React, { useEffect } from 'react';

function SubscriptionComponent() {
  useEffect(() => {
    const subscription = someService.subscribe(data => {
      console.log('Received data:', data);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []); // Run once, when the component mounts

  return <div>Subscribed to the service</div>;
}

export default SubscriptionComponent;
