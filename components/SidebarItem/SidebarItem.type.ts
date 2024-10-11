import { LucideIcon } from "lucide-react"

export type SiderbarItemProps = {
    item:{
        label:string,
        icon:LucideIcon,
        href:string
    }
    key:string
}