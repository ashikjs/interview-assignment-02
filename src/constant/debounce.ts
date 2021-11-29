export const debounce = (func: any, delay: number) => {
    let timer: any;
    const self = this;
    return function () {
        const args: any = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(self, args);
        }, delay);
    };
};
