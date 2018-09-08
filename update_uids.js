const uuidv1 = require('uuid/v1');
const fs = require('fs');

let data = fs.readFileSync('./config.yaml', 'utf8');

for(let i = 0; i<data.length - 3; i++){
  if(data[i]+data[i+1]+data[i+2]+data[i+3] === 'UID:'){
    let current = i + 5;

    while(data[current]!= ' '){
      console.log(data[current])
      current++;
    }
    let newUid = uuidv1();
    data = data.slice(0, i+5) + newUid + '\n' + data.slice(current);
    i += newUid.length;
  }
}

fs.writeFileSync('./config.yaml', data);
