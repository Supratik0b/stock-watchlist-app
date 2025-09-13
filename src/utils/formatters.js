export function pctChange(curr, prev) {
  if (prev === 0) return 0
  return ((curr - prev) / prev) * 100
}

export function timeAgo(ts) {
  let ms

  if (typeof ts === "number") {
    ms = ts > 1e12 ? ts : ts * 1000
  } else {
    ms = Date.now()
  }

  
  if (ms > Date.now()) {
    ms = Date.now()
  }

  const diffSec = Math.max(0, Math.floor((Date.now() - ms) / 1000))
  let mins = Math.floor(diffSec / 60)

 
  if (mins > 59) {
    mins = 59
  }

  if (mins >= 1) {
    return `${mins} min ago`
  } else {
    return `${diffSec} sec ago`
  }
}



