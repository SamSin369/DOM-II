allBlocks = document.querySelectorAll('.block');
parentBlock = document.querySelector('.blocks');
console.log(allBlocks)
allBlocksArr = Array.from(allBlocks)
console.log(allBlocksArr)
parentBlock.prepend('Hello')
function appendTop (e){
    console.log(e)
    parentBlock.prepend(allBlocks[num])
}
// allBlocks.forEach(item => allBlocks.forEach(item => addEventListener('click', item => parentBlock.append(item.target)))
allBlocks[1].addEventListener('click', appendTop)
console.log(allBlocks[1])
