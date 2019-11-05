const roleData = require('./public/apis/roleData.json')

const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}
const phrase = ['很簡單', '很容易', '很快', '很正常']

function getTaskText(role) {
  const target = task[role]
  const random = Math.floor(Math.random() * target.length)
  return target[random]
}

function getPhraseText() {
  const random = Math.floor(Math.random() * phrase.length)
  return phrase[random]
}

function getRoleName(role) {
  let found = roleData.find(el => el.title === role)
  if (found) return found.name
  return ''
}

function generateText(role) {
  let target = getRoleName(role)
  if (!target) return '未選角色，或未能取得這角色的幹話內容。'

  let task = getTaskText(role)
  let phrase = getPhraseText()

  return `${target}，${task}，${phrase}吧！`
}

module.exports = generateText
