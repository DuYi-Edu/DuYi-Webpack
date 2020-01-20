/**
 * 得到所有的省份
 */
export async function getProvinces() {
    return await fetch("/api/local").then(resp => resp.json())
}

/**
 * 根据省份id得到所有的城市
 */
export async function getCities(parentId) {
    const url = `/api/local?parentId=${parentId}`;
    return await fetch(url).then(resp => resp.json())
}