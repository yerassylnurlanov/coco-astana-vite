export const getRentCost = ({ cost, day }: FunctionProps) => {
    if (day > 6) {
        return Math.round((cost / 5 / 7) * day);
    } else {
        return Math.round((cost / 5 / 7) * 3 * day);
    }
};

interface FunctionProps {
    cost: number;
    day: number;
}
