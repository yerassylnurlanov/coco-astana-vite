import { FC, useEffect, useState } from 'react';
import { Option } from './organisms/option';

export const CustomSelect: FC<ComponentProps> = ({
    options,
    placeholder,
    onSelectChange = () => ({}),
    defaulValue,
    name
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [selected, setSelected] = useState(placeholder);

    const selectOption = (option: Option) => {
        setSelected(option.name);
        onSelectChange(option);

        setIsVisible(false);
    };
    useEffect(() => {
        const defaultValueFind = options.find(
            (option) => option.value === defaulValue
        );

        defaultValueFind !== undefined && selectOption(defaultValueFind);
    }, []);

    const optionsLength = options.length;
    return (
        <div className="w-full md:w-auto relative">
            <Option
                onSelect={() => setIsVisible(!isVisible)}
                isVisible={isVisible}
                optionsLength={optionsLength}
                variant="selected"
            >
                {selected}
            </Option>
            <div
                className={`${
                    isVisible ? 'block' : 'hidden'
                } max-h-40 absolute z-10 rounded overflow-y-scroll border-x-2 bg-white text-white w-full`}
            >
                {options.map((item, idx) => (
                    <Option
                        key={idx}
                        onSelect={() => selectOption(item)}
                        isVisible={isVisible}
                        optionsLength={optionsLength}
                        variant="default"
                    >
                        {item.name}
                    </Option>
                ))}
            </div>
        </div>
    );
};

interface Option {
    name: string;
    value: number;
}
export type CustomSelectOptions = Option[];

export type OnSelectChange = (option: Option) => void;

interface ComponentProps {
    options: Array<Option>;
    placeholder: string;
    name: string;
    onSelectChange?: OnSelectChange;
    defaulValue?: number;
}
