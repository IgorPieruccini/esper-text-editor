import React from "react"
export interface Vector2 {
    x: number,
    y: number
}

export interface Command {
    code: string,
    render: React.ReactElement,
    block: React.ReactElement
}