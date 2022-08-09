const app = require('express')();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

var SerialPort = require('serialport');
const parsers = SerialPort.parsers;

const parser = new parsers.Readline({

})

app.use(cors());

var analogvalue;

var port = new SerialPort('COM3',{
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
})

port.pipe(parser);

parser.on('data', function(data){
    console.log(data);
    analogvalue = data;

    analogvalue = analogvalue.replace("\n", "");
    analogvalue = analogvalue.replace("\r", "");

})

lighton();

app.get(["/"], (req, res) => {
    res.send({
        arduinodata:{
            anaologvalue: analogvalue
        }
    });
})

function lighton(){
    port.write("1");
    console.log('light on?');
}

setTimeout(function(){
    port.write("1");
    console.log('light on?');
}, 3000);

app.listen(PORT);
