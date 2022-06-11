import React from "react";

const divImg = {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "100%",
}

export default function Header() {
    return (
        <div id="div-img" style={divImg}>
            <img
                src='https://atlanhq.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff88be917-3990-4a84-831e-636605dde857%2FNew_Project_(1).png?table=block&id=80ca8e35-cc69-4e31-bfd6-b415d328269c&spaceId=308ddd44-c91f-4de8-b1ac-92bd634a3c08&width=1710&userId=&cache=v2'
                alt="atlan logo"/>
        </div>
    );
}
