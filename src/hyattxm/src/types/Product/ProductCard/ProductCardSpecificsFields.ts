import { SpecificsDetailFields } from "./SpecificsDetailFields";

export interface ProductCardSpecificsFields{
    name:string;
    primaryColor:{
        targetItems:Array<SpecificsDetailFields>
    };
    basicFeatures:{
        targetItems:Array<SpecificsDetailFields>
    };
}