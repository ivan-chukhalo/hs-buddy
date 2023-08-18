export type cardType = {
    id: number
    health: number
    attack: number
    name: string
    text: string
    image: string
    battlegrounds: {
        tier: number
        hero: boolean
        quest: boolean
    }
}

export type entityType = ("All" | "Hero" | "Minion" | "Quest" | "Reward")