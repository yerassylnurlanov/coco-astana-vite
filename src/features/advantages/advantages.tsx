import { FastDelivery } from "./atoms/fast-delivery";
import { QualityAssurance } from "./atoms/quality-assurance";
import { Safety } from "./atoms/safety";
import { WithoutCollateral } from "./atoms/without-collateral";

export const Advantages = ()=>
(
    <div className="flex gap-2 mt-10 flex-1 w-full" >
        <FastDelivery />
        <QualityAssurance />
        <Safety />
        <WithoutCollateral />
    </div>
)
