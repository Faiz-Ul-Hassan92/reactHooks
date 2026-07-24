import { useState } from "react"



function TabHandler({ tabs }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div>
            <div className="headers" style={{ display: "flex", gap: "10px" }}>
                {tabs && tabs.map((tab, index) => <div onClick={() => setCurrentIndex(index)}>{tab.label}</div>)}
            </div>
            <div style={{ display: "flex" }}>
                Content: {tabs[currentIndex] && tabs[currentIndex].content && <div>{tabs[currentIndex].content}</div>}
            </div>
        </div>
    )
}

export default function CustomTabs() {

    let tabs = [
        {
            label: "Faizan",
            content: "Old friend"
        },
        {
            label: "Ahsan",
            content: "Close friend"
        },
        {
            label: "Malak",
            content: "Golu"
        }
    ]


    return <TabHandler tabs={tabs} />
}