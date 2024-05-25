import React, { Suspense } from 'react';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '../components/ErrorFallback';
import Loader from '../components/Loader';

const WithErrorBoundary = (Component, ErrorFallbackComponent) => {
  const Closure = (props) => {
    return (
      <Suspense fallback={<Loader />}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} fallbackRender={ErrorFallbackComponent || ErrorFallback}>
              <Component {...props} />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Suspense>
    );
  };
  Closure.displayName = 'ComponentWithErrorBoundary';

  return Closure;
};

WithErrorBoundary.defaultProps = {
  ErrorFallbackComponent: ErrorFallback,
};

WithErrorBoundary.propTypes = {
  Component: PropTypes.node.isRequired,
  ErrorFallbackComponent: PropTypes.node,
};

export default WithErrorBoundary;
