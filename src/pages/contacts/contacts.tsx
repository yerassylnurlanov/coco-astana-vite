export const ContactsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Контакты</h1>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7815ba2d556d27966d9c53cc9930ca28b1ff42bcb12ca880c4497773e3724ca8&amp;source=constructor"
                        width="500"
                        className="w-full"
                        height="400"
                        frameBorder="0"
                    ></iframe>
                </div>
                <div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Адрес</h2>
                        <p className="text-gray-700 mb-2">Сыганак 123</p>
                        <p className="text-gray-700 mb-2">г. Астана</p>
                        <h2 className="text-2xl font-bold mb-4">
                            Свяжитесь с нами
                        </h2>
                        <p className="text-gray-700 mb-2">
                            Email: info@yourcompany.com
                        </p>
                        <p className="text-gray-700 mb-2">
                            Номер телефона: (555) 555-5555(Whatsapp)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
