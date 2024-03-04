export default function KanbanSvg({ color = "#8F96A6" }) {
    return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke={color}/>
                <line y1="7.5" x2="11" y2="7.5" stroke={color}/>
                <line x1="10.5" x2="10.5" y2="16" stroke={color}/>
                <line x1="10" y1="5.5" x2="15" y2="5.5" stroke={color}/>
                <line x1="11" y1="10.5" x2="15" y2="10.5" stroke={color}/>
            </svg>
    )
}
