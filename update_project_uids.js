const uuidv1 = require('uuid/v1');
const fs = require('fs');
let directories = fs.readdirSync(".").filter(item => item.indexOf('.')==-1 && item !== 'node_modules');
for(let k = 0; k<directories.length; k++){
  let contents = fs.readdirSync(`./${directories[k]}`).filter(item => item.indexOf('.md') >= 0);
  for(let j = 0; j<contents.length; j++){
    let fullPath = `./${directories[k]}/${contents[j]}`;
    let data = fs.readFileSync(fullPath, 'utf8');

    for(let i = 0; i<data.length - 3; i++){
      if(data[i]+data[i+1]+data[i+2]+data[i+3]+data[i+4] === '* id:' && data[i-7]+data[i-6]+data[i-5]+data[i-4]+data[i-3]+data[i-2] !== '!vimeo'){
        let current = i + 6;

        while(data[current]!= ' '){
          current++;
        }
        let newUid = uuidv1();
        data = data.slice(0, i+6) + newUid + '\n*' + data.slice(current);
        i += newUid.length;
      }
    }

    fs.writeFileSync(fullPath, data);
    console.log(`UPDATED ${fullPath}`)
  }
}
