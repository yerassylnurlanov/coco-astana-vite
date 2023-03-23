import { useField } from 'formik';

export const useFormikInput = (params: Params): ReturnValues => {
    const { label, name } = params;

    const [fieldInputProps, { error, touched, initialValue }] = useField({
        name: name ? name : ''
    });

    const isError = touched && Boolean(error);
    const isValid = touched && Boolean(!error);

    return {
        value: fieldInputProps.value,
        onChange: fieldInputProps.onChange,

        // initialValue,
        label: label && label,
        isError,
        isValid
    };
};

interface Params extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

interface ReturnValues {
    value: any;
    onChange: (event: any) => void;
    // initialValue: string;
    isError: boolean;
    label?: string;
    isValid: boolean;
}
