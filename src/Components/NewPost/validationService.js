export const Validation = (name, value) => {
    
    if (name === 'title') {
        if (value === '') {
            return {
                errorMessage: 'Enter title',
                valid: false,
                validationState: 'error'
            };
        } else {
            return {
                valid: true,
            };
        }
    } else if (name === 'content') {
        if (value === '') {
            return {
                errorMessage: 'Enter content',
                valid: false,
                validationState: 'error'
            };
        } else {
            return {
                valid: true,
            };
        }
    }
}