// Although you set file-loader in webpack or configured babelrc for next.js
// Typescript cannot understand what svg file is
// Hence made a declaration file for svg extension
// declare module "*.svg"
declare module '*.svg' {
  const content: any;
  export default content;
}
