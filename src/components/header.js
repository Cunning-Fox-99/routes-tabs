import React, {useState} from "react";
import list from '../tabs.json'
import {Link} from "react-router-dom";
export default function Header() {

    // set active tab
    const [active, setActive] = useState(0)

    // Sort tabs by order
    const sortList = (items) => {
        return items.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            if (a.order < b.order) {
                return -1;
            }

            return 0;
        });
    }

    // Make header from list
    return <div className="header">
        {sortList(list).map((item, index) => {
            return <Link key={index}
                         className={active === item.order ? "header__link active" : "header__link"}
                         onClick={() => setActive(item.order)}
                         to={`/${item.id}`}>{item.id}</Link>
        })}
    </div>

}