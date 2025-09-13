export async function fetchDummyData({simulateError=false, delay=700} = {}) {
  await new Promise(r=>setTimeout(r, delay))
  if(simulateError && Math.random() < 0.18) throw new Error('Simulated network error')
  const res = await fetch('/dummyData.json')
  if(!res.ok) throw new Error('Failed to load dummy data')
  const j = await res.json()
  return j.map(item => ({...item, updatedAt: item.updatedAt || Date.now()}))
}
