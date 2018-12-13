const nums = [1,2,3,4,5,6,7,8,9]


for(let n in nums){
    if (n == 5){
        break
    }
    console.log(`${n} = ${nums[n]}`)
}

for(let n in nums){
    if (n == 5){
        continue
    }
    console.log(`${n} = ${nums[n]}`)
}

bloco1:
for(let a in nums){
    for(let b in nums){
        if (a == 2 && b == 2){
            break bloco1
        }
        console.log(`a=${a} b=${b} = ${nums[a]}`)
    }

    if (a == (nums.length - 1)){
        console.log('Ultimo')
    }
}
console.log('Fim ', nums.length)

