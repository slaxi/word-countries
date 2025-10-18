import React, { Component, ReactNode } from 'react';
import Fallback from './Fallback';

interface ErrorBoundaryProps {
  children?: ReactNode;
  fallbackMessage?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log error info here if needed
    // console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fallback
          message={this.props.fallbackMessage || this.state.errorMessage || 'Something went wrong.'}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
