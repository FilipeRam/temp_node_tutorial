//  FS module

const {readFile, writeFile} = require('fs')
console.log('Start!')

readFile('../content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
        
    const first = result
    readFile('../content/result.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second= result
        writeFile('../content/result-sync.txt', `Here is the result: ${first}, ${second}`,{flag: 'a'}, (err, result)=>{
           if(err) {
               console.log(err)
               return
           } 
           console.log('Done with this task!')
        })
    })
})
console.log('Starting next task!')