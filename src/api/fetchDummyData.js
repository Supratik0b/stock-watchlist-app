export async function fetchDummyData({ simulateError = false, delay = 700 } = {}) {
  
  await new Promise((resolve) => setTimeout(resolve, delay))

  
  if (simulateError && Math.random() < 0.18) {
    throw new Error('Simulated network error')
  }

  
  const res = await fetch('/dummyData.json')
  if (!res.ok) throw new Error('Failed to load dummy data')

  const j = await res.json()

  
  return j.map((item) => {
    let updatedAt

    if (item.lastUpdatedTimestamp) {
      // if numeric string → parseInt, if ISO string → Date.parse
      updatedAt = isNaN(item.lastUpdatedTimestamp)
        ? Date.parse(item.lastUpdatedTimestamp)
        : parseInt(item.lastUpdatedTimestamp, 10)
    } else {
      // fallback: random time in last 5 minutes (so cards differ)
      updatedAt = Date.now() - Math.floor(Math.random() * 5 * 60 * 1000)
    }

    return { ...item, updatedAt }
  })
}
