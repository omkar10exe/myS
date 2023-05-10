int green =11;
int red =10;
int yellow =9;
void setup() {
 pinMode (red,OUTPUT);
 pinMode (yellow,OUTPUT);
 pinMode (green,OUTPUT);
}

void loop() {
  digitalWrite(red,HIGH);
  digitalWrite(yellow,HIGH);
  digitalWrite(green,HIGH);
  delay(2000);
  digitalWrite(red,LOW);
  digitalWrite(yellow,LOW);
  digitalWrite(green,LOW);
  delay(2000);
  digitalWrite(red,HIGH);
  delay(3000);
  digitalWrite(red,LOW);
  delay(3000);
  digitalWrite(yellow,HIGH);
  delay(1000);
  digitalWrite(yellow,LOW);
  delay(1000);
  digitalWrite(green,HIGH);
  delay(5000);
  digitalWrite(green,LOW);
  delay(5000);
  }
