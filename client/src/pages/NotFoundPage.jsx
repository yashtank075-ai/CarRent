import React from 'react';
import EmptyState from '../components/EmptyState';

export default function NotFoundPage() {
  return (
    <div className="py-24 px-4 max-w-2xl mx-auto text-center">
      <EmptyState
        title="Page Not Found (404)"
        message="The page you are looking for does not exist or has been relocated. Return to the home page or browse our fleet."
        actionLink="/"
        actionText="Return to Home"
      />
    </div>
  );
}
