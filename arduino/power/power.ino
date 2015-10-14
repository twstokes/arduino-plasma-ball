float sensorValueAvg;

void setup() {
  Serial.begin(9600);

  int x;
  int sensorValueSum = 0;
  
  // figure out the baseline input voltage value
  for(x=0;x<=20;x++) {
    sensorValueSum += analogRead(A0);
  }

  sensorValueAvg = sensorValueSum / x;
}

void loop() {
  // read in the current voltage sensor value
  int sensorValue = analogRead(A0);

  // if voltage reading dips below 10
  if(sensorValue <= (sensorValueAvg - 10)) {
    Serial.println("I've got the power!");  
    // wait two seconds  
    delay(2000);
  }
}
