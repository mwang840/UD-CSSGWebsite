import type { BgDirection } from "@/common/constants/enums";

import type { BgColor } from "../color";

export type BgAnimation = {
    colors?: BgColor[];
    colorCount?: number;
    cssQuerySelector: string;
    direction?: BgDirection;
    intervalTime?: number;
    randomizeColors?: boolean;
};
