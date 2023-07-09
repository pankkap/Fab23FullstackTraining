import { BUILD_CAKE, BUY_CAKE } from "./cakeTypes"

export const buy_cake = ()=>{
    return {
        type: BUY_CAKE
    }
}
export const build_cake = ()=>{
    return {
        type: BUILD_CAKE
    }
}