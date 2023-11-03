// import { heapStats } from "bun:jsc";

export const measureUtil = async (func: () => number, title: string) => {
    const t_start = Bun.nanoseconds();
    const result = func()
    const t_end = Bun.nanoseconds();
    console.log(`Call to ${title} took ${t_end - t_start} nanoseconds.`);
    console.log('Result: ', result)
    // console.log(title, heapStats());
}