import { Operation } from "helpers/operation";
import Banner from "components/common/banner/Banner";
import Spinner from "components/common/spinner/Spinner";
import { PropsWithChildren } from "react";

interface OperationDisplayProps<T> {
  /** The operation to render. */
  operation: Operation<T>,
  /** Optional. A function to render a custom "working" message to the user. */
  renderWorking?: (operation: Operation<T>) => JSX.Element,
  /** Optional. A function to render a custom "error" message to the user. */
  renderError?: (operation: Operation<T>) => JSX.Element,
}

const OperationDisplay = <T,>({
  operation,
  renderWorking,
  renderError,
  children,
}: PropsWithChildren<OperationDisplayProps<T>>): JSX.Element => {
  if (operation.isWorking) {
    return renderWorking
      ? renderWorking(operation)
      : (
        <Spinner
          alt="Working..."
        />
      );
  } else if (operation.errorMessage) {
    return renderError
      ? renderError(operation)
      : (
        <Banner
          type="error"
          message={operation.errorMessage || ""}
        />
      );
  } else {
    return (
      <>
        {children}
      </>
    );
  }
}

export default OperationDisplay;