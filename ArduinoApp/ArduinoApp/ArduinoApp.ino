int redled = 9;
int beeper = 8;
String incomingString = "";

void setup() {
  pinMode(9, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  // tone(beeper,1000,500);
  
  while(Serial.available() > 0){
    incomingString = Serial.read();
  }

  if(incomingString == "1"){
    analogWrite(redled, 255);
  }else{
      analogWrite(redled, 0);
  }
}

void signalconnect() {
      analogWrite(redled, 255);
      tone(beeper, 1000);
      delay(1000);
      analogWrite(redled, 0);
      noTone(beeper);
}
