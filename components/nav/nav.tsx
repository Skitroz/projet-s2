"use client"

import Image from "next/image"
import { FaUser } from "react-icons/fa";
import Logo from "@/public/logo2.png"
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Inscription",
        href: "/inscription",
        description:
            "Pour les utilisateurs qui souhaitent s'inscrire pour accéder à l'intégralité des formations.",
    },
    {
        title: "Connexion",
        href: "/connexion",
        description:
            "Pour les utilisateurs qui ont déjà un compte et qui souhaitent se connecter.",
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Nos formations</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Image src={Logo} alt="Logo" />
                                        <div className="mb-2 mt-4 text-lg font-medium underline">
                                            Voir la liste
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            100% en ligne et à votre rythme.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/formation" title="Formations diplômantes">
                                Apprenez un métier d’avenir grâce à des projets concrets.
                            </ListItem>
                            <ListItem href="/cours" title="Cours en libre accès">
                                Développez vos connaissances avec plus de 5 cours.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger><FaUser/></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"