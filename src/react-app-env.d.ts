/// <reference types="react-scripts" />
// helps reading mp3 file for typescript
declare module '*.mp3' {
    const src: string;
    export default src;
}
