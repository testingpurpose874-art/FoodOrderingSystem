export const menuList = [
    {
        id: 0,
        name: "dashboards",
        path: "#",
        icon: 'feather-airplay',
        dropdownMenu: [
            {
                id: 1,
                name: "CRM",
                path: "/",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Analytics",
                path: "/dashboards/analytics",
                subdropdownMenu: false
            }
        ]
    }
]
