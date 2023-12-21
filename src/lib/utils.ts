// This function validates the given data as a string and checks if it meets the specified length criteria.
export const validateFormDataAsString = (data: unknown, dataLength: number) => {
    // Check if the data is null, undefined, or not a string.
    if (!data || typeof data !== "string") {
        return false; // Return false if the data is invalid.
    } else if (data?.length > dataLength) {
        return false; // Return false if the data length exceeds the specified limit.
    }

    return true; // Return true if the data is valid.

};

// This function retrieves the error message from the given error object.
export const getErrorMessage = (error: unknown) => {
    let message: string = '';

    // Check if the error is an instance of the Error class.
    if (error instanceof Error) {
        message = error.message; // Retrieve the error message from the Error object.
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message); // Retrieve the error message from the error object if it has a 'message' property.
    } else {
        message = "An unknown error occurred."; // Set a default error message if the error is not recognized.
    }

    return message; // Return the error message.
}