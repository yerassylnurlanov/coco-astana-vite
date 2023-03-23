import { FormikProps } from 'formik';
import Select, { ActionMeta, OptionProps } from 'react-select';

interface MySelectProps {
    field: {
        name: string;
        value: string;
        onBlur: () => void;
    };
    form: FormikProps<any>;
    options: {
        value: string;
        label?: string;
    }[];
    onChange?: (value: any, actionMeta: ActionMeta<any>) => void;
}

export const CustomSelect = ({
    field,
    form,
    options,
    onChange,
    ...props
}: MySelectProps) => {
    const selectedOption = options.find(
        (option) => option.value === field.value
    );

    return (
        <Select
            options={options}
            value={selectedOption}
            onChange={(value: any, actionMeta: ActionMeta<any>) => {
                form.setFieldValue(field.name, value.data);
                if (onChange) {
                    onChange(value, actionMeta);
                }
            }}
            onBlur={field.onBlur}
            {...props}
        />
    );
};
