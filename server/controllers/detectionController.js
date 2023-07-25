const { spawn } = require('child_process');

let detect = (fname) => {
    return new Promise((resolve, reject) => {
        let dataFromPython;
        const childpython = spawn('python', ['python.py', fname])
        childpython.stdout.on('data', (data) => {
            dataFromPython= data;
            console.log(`stdout: ${data}`);
        }),
        childpython.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`)
        })
        childpython.on('exit',(data)=>{
            try {
                const arrayOfObjects = JSON.parse(dataFromPython);
                resolve(arrayOfObjects);
              } catch (error) {
                console.error('Error parsing data:', error);
                reject(error);
              }
        })
    })
}

const objectDectect=async(req,res)=>{
    console.log(req.file);
    detect(req.file.originalname).then((result)=>{
        res.send({result});
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports=objectDectect;