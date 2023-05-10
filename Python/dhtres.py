import sys
import Adafruit_DHT
sensor= Adafruit_DHT.DHT11
GPIO=4
humidity,temp=Adafruit_DHT.read_retry(sensor,GPIO)
if humidity is not None and temp is not None:
    print("temp={0:0.1f}*c humidity={1:0.1f}%".format(temp,humidity))
else:
    print("failed")
    