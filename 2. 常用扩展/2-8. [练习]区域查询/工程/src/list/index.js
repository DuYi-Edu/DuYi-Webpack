import { getProvinces } from "@/util/areaService"
import $ from "jquery"

getProvinces().then(ps => {
    //ps：省份的数组
    const ul = $(".provinces");
    for (const p of ps) {
        const li = $("<li>").appendTo(ul);
        const a = $("<a>").text(p.simpleName).appendTo(li);
        a.prop("href", `detail.html?name=${p.areaName}&id=${p.id}`)
    }
});