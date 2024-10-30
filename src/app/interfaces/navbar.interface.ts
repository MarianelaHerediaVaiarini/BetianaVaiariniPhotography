export interface NavbarInterface {
    link: string
    label: string
    active: boolean
    icon?: string
    dropdown?: { link: string, label: string }[];
}