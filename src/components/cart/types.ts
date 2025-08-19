import { ComponentPropsWithRef } from "react";
import { REGION } from "../../constans/constants";

export type THomeCart = ComponentPropsWithRef<'div'> & {
    continent: typeof REGION[keyof typeof REGION];
}

export type TRegionKeys = {
  [value: string]: REGION
}