import React from "react";
import { cn } from "shared/lib";

import classes from "./ErrorBoundary.module.scss";

import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps {
  className?: string;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  className?: string;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { children, className } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className={cn(classes.ErrorBoundary, {}, [className])}>
          <React.Suspense fallback="">
            <PageError />
          </React.Suspense>
        </div>
      );
    }

    return children;
  }
}
