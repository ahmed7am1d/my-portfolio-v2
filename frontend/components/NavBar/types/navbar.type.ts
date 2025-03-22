export type INavigationItem = {
    id : string,
    /**
     * Icon's path (located in assets/icons)
     * Must be provided without icons prefix so if located in assets/icons/t.svg
     * then should be provided as t.svg.
     */
    iconPath: string,
    textToDisplay: string,
    translationKey: string,
    translationKeyPosition: number,
    to: string
}