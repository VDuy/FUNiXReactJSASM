import React from "react";
function StaffLists(props) {
    const listStaff = props.staffs.map((staff) => {
        return (
            <div key>h1</div>
        )
    })
    return (
        <div>
            {listStaff}
        </div>
    )
}
export default StaffLists;
