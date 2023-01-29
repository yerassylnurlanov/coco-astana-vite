import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import burger from '@assets/images/header/menu-burger.svg';

const items: MenuProps['items'] = [
    {
        label: <a href="https://www.antgroup.com">Каталог</a>,
        key: '0'
    },
    {
        label: <a href="https://www.aliyun.com">О нас</a>,
        key: '1'
    },
    {
        label: <a href="https://www.aliyun.com">Контакты</a>,
        key: '3'
    }
];

export const MenuDropdown = () => (
    <Dropdown
        menu={{ items }}
        trigger={['click']}
        className="p-3 flex m-3 items-center flex-nowrap whitespace-nowrap cursor-pointer"
    >
        <a onClick={(e) => e.preventDefault()}>
            <img
                src={burger}
                alt="call"
                className="max-w-full p-1 max-h-full"
            />
            <Space>
                <p className="ml-2">Меню</p>
            </Space>
        </a>
    </Dropdown>
);
