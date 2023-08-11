/* eslint-disable init-declarations -- disabled */
declare module "*.module.css" {
    const styles: {
        [className: string]: string;
    };
    export default styles;
}
