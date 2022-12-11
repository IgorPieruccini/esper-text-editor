import React from "react";
import { Vector2 } from "../sharedTypes";
import "./CommandPanel.scss";

interface CommandPanelProps {
    position: Vector2
}

export const CommandPanel = ({position}: CommandPanelProps)=> {

    return (
        <div
            style={{top: position.y, left: position.x}}
            className="CommandPanel"
            >
            <p> Cool list of your commands </p>
        </div>
    )
}