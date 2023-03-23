import { baseAxios } from '@features/lib/axios';

interface Params {
    message: string;
}
interface MailerPostData {
    success: boolean;
    message: string;
}
export const sendOrderPost = async (
    params: Params
): Promise<MailerPostData> => {
    try {
        const res = await baseAxios.post('/sendMessage', params);
        return res.data;
    } catch (err) {
        throw err;
    }
};
