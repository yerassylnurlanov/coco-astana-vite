import { api } from '@api/api';
import { AppState, useAppDispatch, useAppSelector } from '@store/store';
import { Title } from '@ui/title';
import {
    ErrorMessage,
    Field,
    Form,
    Formik,
    FormikProps,
    FieldProps
} from 'formik';
import { FC, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import * as Yup from 'yup';
import { IMaskInput } from 'react-imask';
import { CustomSelect } from './custom-select';
import { notificationActions } from '@features/notification/notification-slice';
import { basketActions, BasketItem } from '@store/basketSlice';
import { redirect, useNavigate, useNavigation } from 'react-router-dom';

interface ComponentProps {
    goToBasket: () => void;
}
interface SelectOption {
    label?: string;
    value: string;
}

const options: SelectOption[] = [
    { value: 'Самовывоз', label: 'Самовывоз' },
    { value: 'Доставка', label: 'Доставка' }
];

export const OrderPage: FC<ComponentProps> = ({ goToBasket }) => {
    const { sum, items } = useAppSelector(
        ({ basket: { sum, items } }: AppState) => ({
            sum,
            items
        })
    );
    const dispatch = useAppDispatch();
    const orderItems = getOrderItems(items);
    const navigate = useNavigate();

    const handleSubmit = ({
        phoneNumber,
        deliveryMethod,
        street,
        house,
        flat
    }: InitialValues) => {
        api.sendOrderPost({
            message: `Номер телефона: <a href='https://wa.me/${phoneNumber
                .substring(2)
                .replace(/[ ()]/g, '')}'>${phoneNumber}</a>\nСпособ доставки: ${
                deliveryMethod.label
            } ${
                deliveryMethod.value === 'Доставка'
                    ? `\nАдрес: ${street} дом ${house}, кв ${flat}`
                    : ''
            }${orderItems}\nОбщая сумма: ${sum} тг `
        });
        dispatch(
            notificationActions.setNotificationMessage({
                type: 'success',
                message: 'Заказ успешно отправлен'
            })
        );
        dispatch(basketActions.cleanBasket());
        navigate('/');
    };
    return (
        <div className="container m-auto mt-20 px-2 md:mt-10">
            <Title>Заказ</Title>
            <div className="flex justify-between items-center">
                <button
                    onClick={goToBasket}
                    className="text-blue-500 flex gap-2 items-center py-4"
                >
                    <IoMdArrowBack size={24} />
                    <p>Назад</p>
                </button>
            </div>
            <div className="bg-white p-4 rounded shadow">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({
                        handleSubmit,
                        setFieldValue,
                        setFieldTouched,
                        values,
                        errors,
                        touched
                    }) => (
                        <Form>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="phoneNumber"
                                >
                                    Номер телефона (WhatsApp)
                                </label>
                                <Field
                                    name="phoneNumber"
                                    as={IMaskInput}
                                    type="tel"
                                    mask={'+7(000)000 00 00'}
                                    placeholder="+7 (123) 456 7890"
                                    autoComplete={'off'}
                                    className="w-full border border-gray-400 p-2 rounded"
                                />
                                <div className="text-red-500">
                                    <ErrorMessage name="phoneNumber" />
                                </div>
                            </div>
                            <div className="mb-5">
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="mySelectValue"
                                >
                                    Выберите метод получения:
                                </label>
                                <Field name="deliveryMethod">
                                    {({
                                        field,
                                        form
                                    }: FieldProps<InitialValues>) => (
                                        <CustomSelect
                                            //@ts-ignore
                                            field={field}
                                            form={form}
                                            onChange={(val) =>
                                                setFieldValue(field.name, val)
                                            }
                                            options={options}
                                        />
                                    )}
                                </Field>{' '}
                                <div className="text-red-500">
                                    <ErrorMessage name="deliveryMethod.value" />
                                </div>
                            </div>
                            {values.deliveryMethod.value === 'Доставка' && (
                                <div className="flex gap-4 mb-4">
                                    <div className="">
                                        <label
                                            className="block text-gray-700 font-bold mb-2"
                                            htmlFor="street"
                                        >
                                            Улица
                                        </label>
                                        <Field
                                            name="street"
                                            placeholder="Мангилик ел"
                                            className="w-full border border-gray-400 p-2 rounded"
                                        />
                                    </div>{' '}
                                    <div className="">
                                        <label
                                            className="block text-gray-700 font-bold mb-2"
                                            htmlFor="house"
                                        >
                                            Дом
                                        </label>
                                        <Field
                                            name="house"
                                            placeholder="23"
                                            className="w-full border border-gray-400 p-2 rounded"
                                        />
                                    </div>
                                    <div className="">
                                        <label
                                            className="block text-gray-700 font-bold mb-2"
                                            htmlFor="address"
                                        >
                                            Квартира
                                        </label>
                                        <Field
                                            name="flat"
                                            as={IMaskInput}
                                            mask={'000'}
                                            placeholder="55"
                                            className="w-full border border-gray-400 p-2 rounded"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="mb-4">
                                {/* <label className="block text-gray-700 font-bold mb-2"></label>
                        <div className="w-full border border-gray-400 p-2 rounded">
                            1
                        </div> */}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Общая сумма
                                </label>

                                <div className="text-gray-700 font-bold">
                                    {sum} T
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-500"
                            >
                                Оформить
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

function getOrderItems(items: BasketItem[]) {
    let orderItems = '';
    items.map(({ name, rentPrice, rentDays }, index) => {
        orderItems += `\n${index + 1}. ${name} ${rentDays} шт. ${rentPrice} тг`;
    });
    return orderItems;
}

interface InitialValues {
    phoneNumber: string;
    deliveryMethod: SelectOption;
    street?: string;
    house?: string;
    flat?: string;
}
const initialValues: InitialValues = {
    phoneNumber: '',
    deliveryMethod: {
        value: '',
        label: ''
    },
    street: '',
    house: '',
    flat: ''
};

export const validationSchema: Yup.ObjectSchema<InitialValues> = Yup.object({
    phoneNumber: Yup.string()
        .length(16, 'Введите корректный номер телефона')
        .required('Введите номер телефона'),
    deliveryMethod: Yup.object().shape({
        value: Yup.string().required('Выберите метод получения')
    }),
    street: Yup.string(),
    house: Yup.string(),
    flat: Yup.string()
});
