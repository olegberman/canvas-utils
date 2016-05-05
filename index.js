/**
  There's no native support of mulitline text in Canvas,
  this function will help you to draw multiline text
  by providing max width, line breaks will happen there
**/

const wrap_text = (ctx, text, x, y, lineHeight, maxWidth) => {
  const words = text.split(' ')
  let lines = []
  let sliceFrom = 0
  for(let i = 0; i < words.length; i++) {
    let chunk = words.slice(sliceFrom, i).join(' ')
    const last = i === words.length - 1
    const bigger = ctx.measureText(chunk).width > maxWidth
    if(bigger || last) {
      lines.push(words.slice(sliceFrom, i - 1).join(' '))
      sliceFrom = i
    }
  }
  let offsetY = 0
  for(let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x, y + offsetY)
    offsetY = offsetY + lineHeight
  }
}
